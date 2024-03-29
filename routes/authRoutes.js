const { Router } = require('express');
const authController = require('../controllers/authController');
const router = Router();

router.get('/signup', authController.signup_get);
router.get('/home', authController.home_get);
router.get('/adminpage', authController.adminpage_get);
router.get('/customerpage', authController.customerpage_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);
router.post('/issuecreditsendpoint', authController.issuecreditsendpoint_post);
router.post('/deletecustomer', authController.deletecustomer_post);
router.post('/setwebhook', authController.setwebhook_post);


module.exports = router;