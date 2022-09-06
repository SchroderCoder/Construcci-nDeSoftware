const express = require('express');
const router = express.Router();

const labController = require('../controllers/lab17.controller');

router.get('/lab1', labController.getLab1);

router.get('/lab3', labController.getLab3);

router.get('/lab4', labController.getLab4);

router.get('/lab5', labController.getLab5);

router.get('/lab17', labController.getLab17);

router.post('/lab17', labController.postLab17);

module.exports = router;