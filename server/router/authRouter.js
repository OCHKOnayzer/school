const Router = require('express');
const router = new Router();
const controller = require('../controller/authController.js');

router.post('/registration',controller.registeration);
router.post('/login',controller.loginUser);
router.post('/logout',controller.logout);
router.get('/refresh',controller.refresh);
router.post('/edit',controller.edit);
router.post('/updateImage',controller.updateImage);

module.exports = router;