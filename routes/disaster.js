const { Router } = require('express');
const router = Router();

const { all_locations_post, all_locations_get, compare_distance } = require('../controller/disaster');

router.get('/get/locations', all_locations_get);

router.post('/set/locations', all_locations_post);

router.get('/compare-distance', compare_distance);

module.exports = router;