const { Router } = require('express');
const router = Router();

const { signout, phone_signup, verifyOTP, admin_phone_signup, admin_otp_verify, get_all_users, get_affected_user } = require('../controller/auth');

router.post('/signup', phone_signup);
router.post('/verifyOTP', verifyOTP);

router.get('/get/all/users', get_all_users);
router.get('/get/affected-user', get_affected_user);

router.post('/admin/signup', admin_phone_signup);
router.post('/admin/verifyOTP', admin_otp_verify);

router.get('/signout', signout);

module.exports = router;