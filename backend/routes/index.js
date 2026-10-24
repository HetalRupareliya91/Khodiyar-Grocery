// Khodiyar Grocery API - route registry
const express = require('express');
const router = express.Router();

router.use('/products', require('./products'));
router.use('/categories', require('./categories'));
router.use('/brands', require('./brands'));
router.use('/units', require('./units'));
router.use('/suppliers', require('./suppliers'));
router.use('/inventory', require('./inventory'));

module.exports = router;
