const User = require('../model/user');
const jwt = require('jsonwebtoken');
const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const maxAge = 3 * 24 * 60 * 60;
const createToken = user => {
    return jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
};

exports.phone_signup = async (req, res) => {
    try {
        console.log(req.body);
        const data = await client.verify.services('VA3c52b95816d50423533e0be1e3f4c20d').verifications.create({
            to: `+91${req.body.phone}`,
            channel: 'sms'
        });

        if (data.status === 'pending') {
            res.json({ success: 'Please check your inbox for OTP!' });
        } else {
            return res.json({ error: 'Sorry! Please input a valid phone number!' });
        }
    } catch (err) {
        return res.json({ error: 'Some error occured!!!', err });
    }
};

exports.verifyOTP = async (req, res) => {
    try {
        console.log(req.body);
        // res.send('OKAY');
        const { phone, code, name, latitude, longitude } = req.body;
        // console.log(req.body);
        const data = await client.verify.services('VA3c52b95816d50423533e0be1e3f4c20d').verificationChecks.create({
            to: `+91${phone}`,
            code
        });

        if (data.status === 'approved') {

            const user = await User.findOne({ phone });

            if (user) {
                const token = await createToken(user);

                res.cookie('INUNDATION', token, { httpOnly: true, maxAge: maxAge * 1000 });

                return res.status(400).json({
                    user,
                    error: 'This phone is already registered!'
                });
            } else {
                const newUser = new User({
                    phone,
                    name,
                    location: {
                        latitude,
                        longitude
                    }
                });
                await newUser.save();

                const token = await createToken(newUser);
                res.cookie('INUNDATION', token, { httpOnly: true, maxAge: maxAge * 1000 });

                return res.json({
                    user: newUser,
                    success: 'User authenticated successfully!'
                });
            }
        } else {
            return res.json({
                error: 'Please input the correct OTP!'
            });
        }
    } catch (err) {
        console.log(err);
        return res.json({ error: 'Some error occured!' });
    }
};

exports.admin_phone_signup = async (req, res) => {
    try {
        console.log(req.body);
        // res.send('okay');
        const data = await client.verify.services('VA3c52b95816d50423533e0be1e3f4c20d').verifications.create({
            to: `+91${req.body.phone}`,
            channel: 'sms'
        });

        if (data.status === 'pending') {
            res.json({ success: 'Please check your inbox for OTP!' });
        } else {
            return res.json({ error: 'Sorry! Please input a valid phone number!' });
        }
    } catch (err) {
        return res.json({ error: 'Some error occured!!!', err });
    }
};

exports.admin_otp_verify = async (req, res) => {
    try {
        console.log(req.body);
        const { phone, code, name, latitude, longitude } = req.body;
        const data = await client.verify.services('VA3c52b95816d50423533e0be1e3f4c20d').verificationChecks.create({
            to: `+91${phone}`,
            code
        });

        if (data.status === 'approved') {

            const user = await User.findOne({ phone });

            if (user) {
                const token = await createToken(user);

                res.cookie('INUNDATION', token, { httpOnly: true, maxAge: maxAge * 1000 });

                return res.status(400).json({
                    user,
                    error: 'This phone is already registered!'
                });
            } else {
                const newUser = new User({
                    phone,
                    name,
                    role
                });
                await newUser.save();

                const token = await createToken(newUser);
                res.cookie('INUNDATION', token, { httpOnly: true, maxAge: maxAge * 1000 });

                return res.json({
                    user: newUser,
                    success: 'User authenticated successfully!'
                });
            }
        } else {
            return res.json({
                error: 'Please input the correct OTP!'
            });
        }
    } catch (err) {
        console.log(err);
        return res.json({ error: 'Some error occured!' });
    }
};

exports.signout = (req, res) => {
    res.clearCookie('t');
    return res.json({ message: 'Signout success' });
};