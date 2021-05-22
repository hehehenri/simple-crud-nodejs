const mongoose = require('mongoose')

//Create the user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    senha: String,
}, {
    timestamps: true,
    versionKey: false
})

//Create the user model from the user schema
const User = mongoose.model('User', userSchema)

module.exports = User


//1- Schema
//2- Model
//3- Exports Model