const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/lab1', (request, response, next) => {
    response.sendFile(path.join(__dirname, "..",'views', 'primeroslabs', 'lab1.html'));
});

router.get('/lab3', (request, response, next) => {
    response.sendFile(path.join(__dirname, "..",'views', 'primeroslabs', 'lab3.html'));
});

router.get('/lab4', (request, response, next) => {
    response.sendFile(path.join(__dirname, "..",'views', 'primeroslabs', 'lab4.html'));
});

module.exports = router;