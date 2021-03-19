const mongoose = require('mongoose');

const DisasterSchema = mongoose.Schema({
    coordinates: {
        type: String
    },
    user_affected: [{
        type: String
    }]
});

module.exports = mongoose.model('disaster', DisasterSchema);