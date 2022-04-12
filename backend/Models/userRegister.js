const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userRegister = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('users', userRegister);