const Token = require('../auth/token');

exports.gera = async (req, res) => {

    let chave = req.body.chave;

    let token = await Token.gerar(chave);

    if(token.status == 200){
        res.status(token.status).json({
            title: "Sucesso",
            token: token.token,
        });
    }

    res.status(token.status).json({
        title: token.title,
        message: token.message,
    });

}