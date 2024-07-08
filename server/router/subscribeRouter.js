const Router = require('express');
const router = new Router();
const controller = require('../controller/subscribeController.js');

router.get('/subscribe',controller.subscribe);

module.exports = router