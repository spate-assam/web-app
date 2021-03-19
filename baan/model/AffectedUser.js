const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const AffectedUser = mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'user'
    },
    user_affected: [{
        type: String
    }]
});

module.exports = mongoose.model('affected_user', AffectedUser);