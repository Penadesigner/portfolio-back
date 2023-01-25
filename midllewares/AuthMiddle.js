const jwt = require("jsonwebtoken")
const { chave } = require("../config/jwt")

exports.validaLogin = async (req, res, next) => {
    let bearerToken = ""
    const authHeader = req.headers['authorization']
    // VALIDACAO SE EXISTE E SE É DO TIPO BEARER
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return await res.status(403).json({ error: true, msg: 'Token não informado' })
    }
    // SEPARA O TOKEN EM SI
    bearerToken = authHeader.split(' ')[1];

    jwt.verify(bearerToken, chave, async function(err, decode){
        console.log(decode, err);
        if (!decode || err) {
            
            return await res.status(403).json({ error: true, msg: 'Token inválido' })
        }
        // RETORNA OS DADOS DO USUARIO DO BANCO
        req.userrequest = decode

        
        next()
    })
}