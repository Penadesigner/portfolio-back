const Sequelize = require('sequelize');
const db = require('./index.js');

const Formacao = db.define('formacao',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    escola: {
        type: Sequelize.STRING,
        allowNull: false
    },
    curso: {
        type: Sequelize.STRING,
        allowNull: false
    },
    periodo: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Formacao