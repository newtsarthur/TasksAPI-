const express = require('express');
const dotenv = require('dotenv');
const database = require('./db'); // Importando a conexão com o banco
const tarefaRoutes = require('./routes/tarefaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const categoriaRoutes = require('./routes/categoriaRoutes');

// Inicializando o app do Express
const app = express();

dotenv.config();

// Configuração do middleware
app.use(express.json());

// Definindo as rotas
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/tarefas', tarefaRoutes);

// Middleware para rota não encontrada (404)
app.use((req, res, next) => {
    console.warn(`Rota não encontrada: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ error: 'Rota não encontrada' });
});

// Middleware para tratamento de erros globais
app.use((err, req, res, next) => {
    console.error('Erro interno no servidor:', err.stack);
    res.status(500).json({ error: 'Algo deu errado no servidor!' });
});

// Sincronizar tabelas e iniciar o servidor
(async () => {
    try {
        await database.authenticate(); // Verifica a conexão com o banco
        console.log('Conexão com o banco de dados bem-sucedida!');

        await database.sync({ force: false }); // Sincroniza as tabelas
        console.log('Todas as tabelas sincronizadas com sucesso!');

        // Inicia o servidor
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ou sincronizar tabelas:', error);
    }
})();
