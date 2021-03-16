const { Router } = require('express');
const router = Router();

const { signout, phone_signup, verifyOTP } = require('../controller/auth');

router.get('/test', (req, res) => {
    res.send('Okay!');
});

module.exports = router;