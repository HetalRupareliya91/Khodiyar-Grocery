// Khodiyar Grocery API - route registry
const express = require('express');
const router = express.Router();

router.use('/products', require('./products'));
router.use('/categories', require('./categories'));
router.use('/brands', require('./brands'));
router.use('/units', require('./units'));
router.use('/suppliers', require('./suppliers'));
router.use('/inventory', require('./inventory'));
router.use('/customers', require('./customers'));
router.use('/addresses', require('./addresses'));
router.use('/carts', require('./carts'));
router.use('/wishlists', require('./wishlists'));
router.use('/orders', require('./orders'));
router.use('/order-items', require('./order-items'));
router.use('/payments', require('./payments'));
router.use('/invoices', require('./invoices'));
router.use('/coupons', require('./coupons'));

module.exports = router;
