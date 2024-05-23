const express = require('express');
const router = express.Router();
const mailerController = require('../controllers/mailerController');

// send mail
router.post(`/api/contact_me_portfolio/`, mailerController.contactMePortfolio);

module.exports = router;
