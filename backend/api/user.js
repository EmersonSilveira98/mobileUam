const bcrypt = require('bcrypt-nodejs')



module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = {...req.body}
        if(req.params.id) user.id = req.params.id

        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.dtBirth, 'Data de nascimento não informada')
            existsOrError(user.password, 'Password não informado')
            existsOrError(user.confirmPassword, 'Senhas não conferem')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')

            const userFromDB = await app.db('users')
                .where({ email: user.email}).first()
            if(user.id){
                notExistsOrError(userFromDB, 'Usuario ja cadastrado')
            }        
        }catch(msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if(user.id){
            app.db('users')
                .update(user)
                .where({email: user.email})
                .then(_ => res.status(204).send())
                .catch(error => res.status(500).send(error))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(error => res.status(500).send(error))
        }
    }
    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'dtBirth', 'email', 'password')
            .then(users => res.json(users))
            .catch(error => res.status(500).send(error))
    }

    return { save, get}
}