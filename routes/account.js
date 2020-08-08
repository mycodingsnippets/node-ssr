const express = require('express');
const router = express.Router();

const { account } = require('../controllers/account');

router.get('/account', account);

module.exports = router;