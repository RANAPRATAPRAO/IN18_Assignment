const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1101',
    database: 'in18_schema',
});

module.exports = db;
