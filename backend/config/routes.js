module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/schedules')
        .all(app.config.passport.authenticate())
        .post(app.api.scheduling.save)
        .get(app.api.scheduling.get)

    app.route('/schedules/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.scheduling.getById)
    
    app.route('/doctor')
        .all(app.config.passport.authenticate())
        .post(app.api.doctor.save)
        .get(app.api.doctor.get)

    app.route('/doctor/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.doctor.getById)
}