const express = require('express');
const router = express.Router();
const Auth = require('../midllewares/AuthMiddle')
const { getUsers, createUser, atualizaUsers, getUser, deletaUser, login } = require("../controllers/UserController")


router.get('/', getUsers)
router.get('/:id', getUser)

router.post('/login', login)

router.post('/user', createUser)
router.put('/user/:id', atualizaUsers)
router.delete('/user/:id', deletaUser)

module.exports = router