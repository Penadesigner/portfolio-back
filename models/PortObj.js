const Sequelize = require('sequelize');
const db = require('./index.js');

const Objetivos = db.define('objetivos',{
    objetivo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    qualificacoes: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Objetivos