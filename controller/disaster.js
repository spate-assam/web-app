const User = require('../model/user');
const jwt = require('jsonwebtoken');
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

exports.phone_signup = async (req, res) => {
    try {
        
    } catch (err) {
        return res.json({ error: 'Some error occured!!!', err });
    }
};