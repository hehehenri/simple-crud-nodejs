const express = require('express')
const routes = express.Router()
const User = require('./controller/user.controller')

//GET
routes.get('/', User.list)

//POST
routes.post('/create', User.create)

//PUT
routes.put('/update/:_id', User.update)


routes.delete('/:_id', User.delete)


module.exports = routes