const jwt = require("jsonwebtoken")
const { chave } = require("../config/jwt")

exports.validaLogin = async (req, res, next) => {
    let bearerToken = ""
    const authHeader = req.headers['authorization']

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return await res.status(403).json({ error: true, msg: 'Token não informado' })
    }

    bearerToken = authHeader.split(' ')[1];

    jwt.verify(bearerToken, chave, async function(err, decode){
        console.log(decode, err);
        if (!decode || err) {
            
            return await res.status(403).json({ error: true, msg: 'Token inválido' })
        }
        req.userrequest = decode
        next()
    })
}