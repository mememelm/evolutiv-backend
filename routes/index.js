const express = require('express');
const router = express.Router();

const air = require('./air-route')

router.use('/air', air)

module.exports = router;
