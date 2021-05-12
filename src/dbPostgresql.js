const pg = require('pg');

var conString = "postgres://"+process.env.DB_USER_POSTGRESQL+":"+process.env.DB_PASS_POSTGRESQL+"@localhost:5432/"+process.env.DB_NAME_POSTGRESQL;

const connection = new pg.Client(conString);

connection.connect(error => {
    if(error) throw error;
    console.log("Conectado ao banco de dados: "+process.env.DB_NAME_POSTGRESQL);
});

module.exports = connection;