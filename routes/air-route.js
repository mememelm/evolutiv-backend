const express = require('express');
const router = express.Router();

const airController = require('../controllers/air-controller')

router.get('/check-air-by-point', airController.getAirByPoint)
router.get('/heaviest-pollution', airController.getHeaviestPollution)

module.exports = router;