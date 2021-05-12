//Importação das bibliotecas utilizadas
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//Puxando as rotas do arquivo de rotas
const routes = require('./routes');

//Criação do servidor
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());
server.use('/api', routes)


server.listen(process.env.PORT, () =>{
    console.log('Servidor rodando na porta: '+process.env.PORT);
});

