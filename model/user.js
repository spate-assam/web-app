const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    location: {
        latitude: { type: String },
        longitude: { type: String }
    }
});

module.exports = mongoose.model('user', UserSchema);