const { Router } = require('express');
const router = Router();

const { signout, phone_signup, verifyOTP, admin_phone_signup, admin_otp_verify } = require('../controller/auth');

// router.get('/test', (req, res) => {
//     res.send('Okay!');
// });

router.post('/signup', phone_signup);
router.post('/verifyOTP', verifyOTP);

router.post('/admin/signup', admin_phone_signup);
router.post('/admin/verifyOTP', admin_otp_verify);


// router.get('/signout', signout);

module.exports = router;