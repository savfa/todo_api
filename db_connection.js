/*
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

exports.con = con;*/


const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("bh63835_todo", "root", "", {
    host: "localhost",
    dialect: "mysql",
    timezone:"Europe/Moscow",
});

try {
    sequelize.authenticate()
    console.log('Соединение с БД было успешно установлено')
} catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
}

exports.sequelize = sequelize;
