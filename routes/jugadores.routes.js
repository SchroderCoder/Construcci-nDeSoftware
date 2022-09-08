const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js');

const jugadoresController = require('../controllers/jugadores.controller');


router.get('/new', isAuth, jugadoresController.getNewjugador);

router.post('/new',  isAuth,jugadoresController.postNewjugador);

router.get('/lista', isAuth, jugadoresController.getjugadores);

module.exports = router;