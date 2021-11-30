const mysql = require('mysql')
require('dotenv').config();

const mysqlConnection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true
})

mysqlConnection.connect(err => {
    if (!err) {
        console.log("Database connected")
    } else {
        console.log("Database connection failed", err)
    }
})