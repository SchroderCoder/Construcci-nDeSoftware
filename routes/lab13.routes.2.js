const express = require('express');
const router = express.Router();

const labController = require('../controllers/lab13.controller');

router.get('/lab5', labController.getLab5);

router.get('/lab13', labController.getLab13);

router.post('/lab13', labController.postLab13);

module.exports = router;