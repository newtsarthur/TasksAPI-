const Sequelize = require('sequelize');
const database = require('../db');

const Categoria = database.define('Categoria', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Categoria;
