const Sequelize = require('sequelize');
const db = require('./index.js');
const User = require('./UserModel')

const Token = db.define('token',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Token.belongsTo(User,{foreignKey:'user_id'})

module.exports = Token