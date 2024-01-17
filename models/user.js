const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Silahkan Isi Nama'],
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        required: [true, 'Silahkan Isi Password'],
    },
})

module.exports = mongoose.model('User', userSchema)