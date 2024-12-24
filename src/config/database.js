require('dotenv').config()

const mysql = require('mysql2')

// test connection
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USERS,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERS,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections:10,
    connectionLimit:10,
    queueLimit:0
});

module.exports = connection