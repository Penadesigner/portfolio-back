const Sequelize = require('sequelize')
const db = require('./Index.js')

const habilidades = db.define('habilidades',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    periodo: {
        type: Sequelize.STRING,
        allowNull: false
    },
})