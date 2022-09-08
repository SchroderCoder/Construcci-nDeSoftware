const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js');

const labController = require('../controllers/lab17.controller');

router.get('/lab1', isAuth,labController.getLab1);

router.get('/lab3', isAuth,labController.getLab3);

router.get('/lab4', isAuth,labController.getLab4);

router.get('/lab5', isAuth,labController.getLab5);

router.get('/lab17', isAuth,labController.getLab17);

router.post('/lab17', isAuth,labController.postLab17);

module.exports = router;