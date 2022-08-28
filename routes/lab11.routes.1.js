const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/lab1', (request, response, next) => {
    html = fs.readFileSync('./views/primeroslabs/lab1.html');
        response.end(html);
        response.end();
});

router.get('/lab3', (request, response, next) => {
    html = fs.readFileSync('./views/primeroslabs/lab3.html');
        response.end(html);
        response.end();
});

router.get('/lab4', (request, response, next) => {
    html = fs.readFileSync('./views/primeroslabs/lab4.html');
        response.end(html);
        response.end();
});

module.exports = router;