const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminModel = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        reuired: true
    }
})

module.exports = mongoose.model('admin', adminModel);