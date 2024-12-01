// Funções do controlador
const listarTarefas = async (req, res) => {
    // Lógica para listar todas as tarefas
    res.send('Listar todas as tarefas');
};

const criarTarefa = async (req, res) => {
    // Lógica para criar uma nova tarefa
    res.send('Tarefa criada');
};

const buscarTarefa = async (req, res) => {
    const { titulo } = req.params;
    // Lógica para buscar tarefa pelo título
    res.send(`Buscar tarefa com o título: ${titulo}`);
};

const atualizarTarefa = async (req, res) => {
    const { titulo } = req.params;
    // Lógica para atualizar tarefa pelo título
    res.send(`Atualizar tarefa com o título: ${titulo}`);
};

const removerTarefa = async (req, res) => {
    const { titulo } = req.params;
    // Lógica para remover tarefa pelo título
    res.send(`Remover tarefa com o título: ${titulo}`);
};

const listarTarefasPorUsuario = async (req, res) => {
    const { usuarioId } = req.params;
    // Lógica para listar tarefas por usuário
    res.send(`Listar tarefas do usuário com ID: ${usuarioId}`);
};

const listarTarefasAtrasadas = async (req, res) => {
    // Lógica para listar tarefas atrasadas
    res.send('Listar tarefas atrasadas');
};

const listarTarefasConcluidas = async (req, res) => {
    // Lógica para listar tarefas concluídas
    res.send('Listar tarefas concluídas');
};

const filtrarTarefas = async (req, res) => {
    // Lógica para filtrar tarefas (pode incluir query params)
    res.send('Filtrar tarefas');
};

// Exportação das funções
module.exports = {
    listarTarefas,
    criarTarefa,
    buscarTarefa,
    atualizarTarefa,
    removerTarefa,
    listarTarefasPorUsuario,
    listarTarefasAtrasadas,
    listarTarefasConcluidas,
    filtrarTarefas,
};
