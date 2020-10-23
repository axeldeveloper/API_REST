const mongoose = require('mongoose');

const users = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        
    },
    lastName: {
        type: 'string',
        required: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now
    }
})
module.exports = mongoose.model('users', users);