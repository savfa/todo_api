const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateJWT } = require("../services/authenticateJWT");

// auth
router.get(`/api/user/`, authenticateJWT, userController.checkUser);
router.post(`/api/login/`, userController.login);
router.post(`/api/register/`, userController.register);

module.exports = router;