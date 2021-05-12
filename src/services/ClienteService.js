const db = require('../dbMysql');
const dbP = require('../dbPostgresql');

exports.addMysql = (name, cellphone) => {
    return new Promise((resolve, reject) => {

        db.query("INSERT INTO contacts (nome, celular) VALUES (?, ?)", 
        [name, cellphone],
        (error, results) => {
            if(error){reject(error); return;}
            resolve(results.insertId);
        });

    });
};

exports.addPostgres = (name, cellphone) => {
    return new Promise((resolve, reject) => {

        dbP.query("INSERT INTO contacts(nome, celular) VALUES($1, $2)", 
        [name, cellphone],
        (error, results) => {
            if(error){reject(error); return;}
            resolve(results.insertId);
        });

    });
};