const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Definindo as rotas para usuários
router.get('/', usuarioController.listarUsuarios);
router.post('/', usuarioController.criarUsuario);
router.get('/:id', usuarioController.buscarUsuario);
router.put('/:id', usuarioController.atualizarUsuario);
router.delete('/:id', usuarioController.removerUsuario);
router.post('/login', usuarioController.login);

module.exports = router;
