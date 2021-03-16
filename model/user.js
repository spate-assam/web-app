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
    default_location: {
        latitude: { type: String },
        longitude: { type: String }
    },
    live_location: {
        latitude: { type: String },
        longitude: { type: String }
    },
    affected: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('user', UserSchema);