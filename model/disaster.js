const mongoose = require('mongoose');

const DisasterSchema = mongoose.Schema({
    location: {
        latitude: { type: String },
        longitude: { type: String },
    }
});

module.exports = mongoose.model('disaster', DisasterSchema);