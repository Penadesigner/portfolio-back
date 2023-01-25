const UserServices = require("../services/UserServices")
const md5 = require("md5")
const basic = require("basic-auth")

// Pega todos usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await UserServices.getUsers();
        res.status(200).json({ data: users });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Pega o usuario especifico
exports.getUser = async (req, res) => {
    try {
        var id = req.params.id
        const user = await UserServices.getUser(id);
        res.status(200).json({ data: user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

// Cria um usuario
exports.createUser = async (req, res) => {
    try {
        const {name, email, password, permissao} = req.body
        const user = await UserServices.createUser({
            name,
            email,
            password: md5(password),
            permissao
        });
        res.status(200).json({ data: user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

// Edita um usuario
exports.atualizaUsers = async (req, res) => {
    try {
        const id = req.params.id
        const update = {
            name: req.body?.name,
            email: req.body?.email,
            password: req.body?.password
        }
        const user_edit = await UserServices.atualizaUsers(id, update);
        res.status(200).json({ data: user_edit });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
// Excluir um usuario
exports.deletaUser = async (req, res) => {
    try {
        var id = req.params.id
        const user_delete = await UserServices.deleteUser(id);
        res.status(200).json({ data: user_delete });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};


exports.login = async (req, res) => {
    console.log(req);
    try {
        const credenciais = basic(req)
        console.log(req.headers);
        const user = await UserServices.login(credenciais.name, md5(credenciais.pass));

        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};
