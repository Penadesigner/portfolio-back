const Sequelize = require('sequelize');
const db = require('./index.js');

const Jobs = db.define('jobs',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    periodo: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Jobs