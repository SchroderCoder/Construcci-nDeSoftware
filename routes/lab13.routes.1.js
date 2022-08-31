const express = require('express');
const router = express.Router();

const labController = require('../controllers/lab13.controller');

router.get('/lab1', labController.getLab1);

router.get('/lab3', labController.getLab3);

router.get('/lab4', labController.getLab4);

module.exports = router;