const Users = require("../models/UserModel")
const md5 = require("md5")
const jwt = require('jsonwebtoken');
const { chave } = require('../config/jwt')

// Vai no banco e pega todos usuarios
exports.getUsers = async () => {
    const users = await Users.findAll();
    console.log(users);
    return users;
};

// Vai no banco e pega um usuario especifico
exports.getUser = async (id) => {
    const user = await Users.findByPk(id);
    console.log(user);
    return user;
};


// Vai no banco e cria um usuario
exports.createUser = async (data) => {
    const criar_user = await Users.create(data)
    console.log(criar_user);
    return criar_user
}


// Vai no banco e atualiza um usuario
exports.atualizaUsers = async (id, update) => {
    const encontra_user = await Users.findByPk(id);
    
    if(update.name){
        encontra_user.name = update.name
    }
    if(update.email){
        encontra_user.email = update.email
    }
    if(update.password){
        encontra_user.password = md5(update.password)
    }
    
    const edit_user = await encontra_user.save();
    console.log(edit_user);
    return edit_user
};
// Vai no banco e deleta um usuario
exports.deleteUser = async (id) => {
    Users.destroy({ where: { id: id } });
};


exports.login = async (email, password) => {
    const user = await Users.findOne({ where: { email, password } });
    if(!user){
        return null
    }
    const token = await jwt.sign({user}, chave, {
        expiresIn: "3h"
    })
    console.log(user);
    return token;
};
