const express = require('express');
const router = express.Router();

const usuario = require('./controllers/usuario');
const luz = require('./controllers/luz');
const comando = require('./controllers/comandos.js');

router.post('/usuarios', usuario.create);
router.get('/usuarios', usuario.read);

router.post('/luzes', luz.create);
router.get('/luzes', luz.read);
router.put('/luzes/:id', luz.atualizarEstado);

router.post('/comandos', comando.create);
router.get('/comandos', comando.read);
router.post('/comandos/undo', comando.undo);

module.exports = router;
