const Sequelize = require('sequelize');
const db = require('./index.js');

const Users = db.define('user',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    permissao: {
        type: Sequelize.STRING,
        allowNull: false,
        default: 'usuario'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Users