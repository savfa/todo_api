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

// todo: name/login/password указать из настроек хостинга
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize("todo", "root", "", {
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
