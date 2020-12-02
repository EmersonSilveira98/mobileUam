module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError} = app.api.validation

    const save = (req, res) => {
        const data = {...req.body}

        try {
            existsOrError(data.doctorId, 'Medico(a) não informado')
            existsOrError(data.date, 'Data não informada')
            existsOrError(data.schedule, 'Horario não informado')
        }catch(msg){
            return res.status(400).send(msg)
        }

        app.db('scheduling')
            .insert(data)
            .then(_ => res.status(204).send())
            .catch(error => res.status(400).send(error))
    }
    const get= (req, res) => {
        app.db('scheduling')
            .select('id', 'doctorId', 'date', 'schedule', 'userId')
            .then(schedule => res.json(schedule))
            .catch(error => res.status(500).send(error))
    }

    const getById = (req, res) => {
        app.db('scheduling')
            .where({userId: req.params.id})
            .select('id', 'doctorId', 'date', 'schedule', 'userId')
            .then(schedule => res.json(schedule))
            .catch(error => res.status(500).send(error))
    }

    return {save, get, getById}
}