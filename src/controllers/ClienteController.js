const NoteService = require('../services/ClienteService');
const Token = require('../auth/token');
const Util  = require('../util/util');

exports.novo = async (req, res) => {

let bearerHeader  = req.headers['authorization'];
let cliente = req.body.cliente;

if(!bearerHeader){
    res.status(403).json({
        title: "Erro",
        message: "Token necessário",
    });
}

let bearer = bearerHeader.split(' ');
let jwt = bearer[1];

validacao = await Token.validar(jwt, cliente);

if(validacao.status != 200){
    res.status(validacao.status).json(validacao);   
}

if(validacao.cliente == "macapa"){

    let body = req.body;

    try{

        for (var [key, value] of Object.entries(body.contacts)) {

            let noteId = await NoteService.addMysql(value.name.toUpperCase(), Util.mTel(value.cellphone));
    
        }

    }catch(error){
        res.status(500).json({
            title: "Erro",
            error: error.message
        });
    }


}else if(validacao.cliente == "varejao"){

    let body = req.body;

    try{

        for (var [key, value] of Object.entries(body.contacts)) {

            let noteId = await NoteService.addPostgres(value.name, value.cellphone);
    
        }

    }catch(error){
        res.status(500).json({
            title: "Erro",
            error: error.message
        });
    }

}

res.status(201).json({
    status: "Sucesso",
    message: "Contatos salvos com sucesso!",
});

}