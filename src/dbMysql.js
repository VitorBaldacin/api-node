const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST_MYSQL,
    user: process.env.DB_USER_MYSQL,
    password: process.env.DB_PASS_MYSQL,
    database: process.env.DB_NAME_MYSQL
});

connection.connect((error) => {
    if(error) throw error;
    console.log("Conectado ao banco de dados: "+process.env.DB_NAME_MYSQL);
});

module.exports = connection;