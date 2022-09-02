const express = require('express');
const router = express.Router();

const labController = require('../controllers/lab14.controller');

router.get('/lab5', labController.getLab5);

router.get('/lab14', labController.getLab14);

router.post('/lab14', labController.postLab14);

module.exports = router;