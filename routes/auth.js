const { Router } = require('express');
const router = Router();

const { signout, phone_signup, verifyOTP } = require('../controller/auth');

// router.get('/test', (req, res) => {
//     res.send('Okay!');
// });

router.post('/signup', phone_signup);
router.post('/verifyOTP', verifyOTP);

// router.get('/signout', signout);

module.exports = router;