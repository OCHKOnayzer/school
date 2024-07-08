const Router = require('express');
const router = new Router();
const controller = require('../subscribe/donate.js');

router.post('/buySubscribe',controller.buy);

module.exports = router;