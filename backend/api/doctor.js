module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation
    const save = (req, res) => {
        const doctor = {...req.body}

        try {
            existsOrError(doctor.name, 'Medico(a) não informado')
            
        }catch(msg){
            return res.status(400).send(msg)
        }

        app.db('doctor')
            .insert(doctor)
            .then(_ => res.status(204).send())
            .catch(error => res.status(400).send(error))
    }

    const get = (req, res) => {
        app.db('doctor')
            .select('id', 'name')
            .then(doctor => res.json(doctor))
            .catch(error => res.status(500).send(error))
    }

    const getById = (req, res) =>{
        app.db('doctor')
            .select('name')
            .where({id: req.params.id})
            .then(doctorName => res.json(doctorName))
            .catch(error => res.status(400).send(error))
    }

    return {save, get, getById}
}