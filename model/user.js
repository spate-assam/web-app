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
    default_lat: {
        type: String,
        required: true
    },
    default_lon: {
        type: String,
        required: true
    },
    live_lat: {
        type: String,
    },
    live_lon: {
        type: String,
    },
    affected: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', UserSchema);