const Sequelize = require('sequelize');
const database = require('../db'); 

const Usuario = database.define('Usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

// Sincronizar automaticamente com o banco de dados
Usuario.sync({ force: false }) // force: false não recria a tabela se já existir
    .then(() => {
        console.log('Tabela Usuario criada ou já existente');
    })
    .catch((error) => {
        console.error('Erro ao criar a tabela Usuario:', error);
    });

module.exports = Usuario;
