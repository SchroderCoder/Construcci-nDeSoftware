const express = require('express');
const router = express.Router();

const jugadoresController = require('../controllers/jugadores.controller');


router.get('/new', jugadoresController.getNewjugador);

router.post('/new', jugadoresController.postNewjugador);

router.get('/lista', jugadoresController.getjugadores);

module.exports = router;