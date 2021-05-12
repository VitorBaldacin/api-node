const JWT  = require('jsonwebtoken');

const gerar = chave => (
    new Promise(resolve => {

        JWT.sign({teste:"teste"}, chave, { algorithm: 'HS256' }, function(error, token){

            if(error){
    
                resolve({
                    status: 500,
                    title: "Erro",
                    message: "Ocorreu um erro ao gerar o token",
                });
    
            }
    
            resolve({
                status: 200,
                token
            });
        
        });

    })
);

const validar = (token, cliente) => (
    new Promise(resolve => {

        if(cliente == "macapa"){

            JWT.verify(token, process.env.SECRET_KEY_MACAPA, function(error, decoded){

                if(error){
        
                    resolve({
                        status: 500,
                        title: "Erro",
                        message: "Ocorreu um erro ao validar o token",
                    });
        
                }
                
                resolve({
                    status: 200,
                    cliente: 'macapa'
                });
                
            
            });

        }else if(cliente == "varejao"){

            JWT.verify(token, process.env.SECRET_KEY_VAREJAO, function(error, decoded){

                if(error){
        
                    resolve({
                        status: 500,
                        title: "Erro",
                        message: "Ocorreu um erro ao validar o token",
                    });
        
                }
                
                resolve({
                    status: 200,
                    cliente: 'varejao'
                });
                
            
            });
            
        }

        resolve({
            status: 401,
            title: "Erro",
            message: "Token inválido",
        });

    })
);


module.exports = {
    gerar,
    validar
}