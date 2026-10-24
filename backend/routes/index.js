// Khodiyar Grocery API - route registry
const express = require('express');
const router = express.Router();

router.use('/products', require('./products'));

module.exports = router;
