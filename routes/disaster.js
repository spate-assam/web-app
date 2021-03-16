const { Router } = require('express');
const router = Router();

const { all_locations_post, all_locations_get } = require('../controller/disaster');

router.get('/get/locations', all_locations_get);

router.post('/get/locations', all_locations_post);

module.exports = router;