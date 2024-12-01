const Categoria = require('../models/categoria');

// Listar todas as categorias
exports.listarCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar categorias' });
    }
};

// Criar uma nova categoria
exports.criarCategoria = async (req, res) => {
    try {
        const { nome } = req.body;
        const novaCategoria = await Categoria.create({ nome });
        res.status(201).json(novaCategoria);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar categoria' });
    }
};

// Buscar categoria por ID
exports.buscarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar categoria' });
    }
};

// Atualizar uma categoria
exports.atualizarCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }
        categoria.nome = nome || categoria.nome;
        await categoria.save();
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar categoria' });
    }
};

// Remover uma categoria
exports.removerCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }
        await categoria.destroy();
        res.status(200).json({ message: 'Categoria removida com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao remover categoria' });
    }
};
