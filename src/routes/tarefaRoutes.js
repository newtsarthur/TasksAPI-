const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Rotas existentes
router.get('/', tarefaController.listarTarefas);
router.post('/', tarefaController.criarTarefa);
router.get('/:titulo', tarefaController.buscarTarefa);
router.put('/:titulo', tarefaController.atualizarTarefa);
router.delete('/:titulo', tarefaController.removerTarefa);

// Rotas adicionais
router.get('/usuario/:usuarioId', tarefaController.listarTarefasPorUsuario); // Tarefas por usuário
router.get('/filtro/atrasadas', tarefaController.listarTarefasAtrasadas);    // Tarefas atrasadas
router.get('/filtro/concluidas', tarefaController.listarTarefasConcluidas); // Tarefas concluídas
router.get('/filtro', tarefaController.filtrarTarefas);                     // Filtrar tarefas

module.exports = router;


