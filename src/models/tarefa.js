const Sequelize = require('sequelize');
const database = require('../db');
const Categoria = require('./categoria');

const Tarefa = database.define('Tarefa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
    },
    dataVencimento: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        defaultValue: 'pendente',
        allowNull: false,
    },
});

// Relacionamento com Categoria
Tarefa.belongsTo(Categoria, { foreignKey: 'categoriaId', onDelete: 'CASCADE' });

// Sincronizar automaticamente a tabela
Tarefa.sync({ force: false })
    .then(() => console.log('Tabela Tarefa sincronizada com sucesso!'))
    .catch((error) => console.error('Erro ao sincronizar tabela Tarefa:', error));

module.exports = Tarefa;


