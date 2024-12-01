const Sequelize = require('sequelize');
require('dotenv').config(); // Para carregar as variáveis de ambiente do arquivo .env

// Criação da instância do Sequelize utilizando variáveis de ambiente
const componenteSequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql',
    host: process.env.DB_HOST,
});

// Verificando a conexão com o banco de dados
componenteSequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    })
    .catch((err) => {
        console.error('Erro ao conectar com o banco de dados:', err);
    });

module.exports = componenteSequelize;


