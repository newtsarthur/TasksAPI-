const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Definindo as rotas para categorias
router.get('/', categoriaController.listarCategorias);
router.post('/', categoriaController.criarCategoria);
router.get('/:id', categoriaController.buscarCategoria);
router.put('/:id', categoriaController.atualizarCategoria);
router.delete('/:id', categoriaController.removerCategoria);

module.exports = router;
