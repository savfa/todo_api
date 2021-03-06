const db = require('../db_connection');

exports.all = function (callback) {
    // const sql = "SELECT * FROM todo_list";
    const sql = "SELECT * FROM todo_list INNER JOIN todo_users USING(user_id)";

    db.con.query(sql, function (err, result) {
        callback(err, result);
    });
};



// auth
exports.getAuth = function (login, password, callback) {
    const sql = `SELECT user_id, user_name, user_email FROM todo_users WHERE user_name = '${login}' AND user_password = '${password}'`;
    db.con.query(sql, function (err, result) {
        callback(err, result);
    });
};

exports.findById = function (id, callback) {
    const sql = `SELECT id_todo, label , done, important FROM  todo_list INNER JOIN todo_users USING(user_id) WHERE user_id = '${id}'`;
    db.con.query(sql, function (err, result) {
        callback(err, result);
    });
};

exports.setRegistration = function (login, password, email, callback) {
    const sql = `INSERT INTO todo_users(user_name, user_password, user_email) VALUES ('${login}', '${password}', '${email}')`;
    db.con.query(sql, function (err, result) {
        callback(err, result);
    });
};

// add item
exports.create = function (user_id, todo, callback) {
    const sql = `INSERT INTO todo_list(user_id, label) VALUES ('${user_id}' ,'${todo}')`;
    db.con.query(sql, function (err, result) {
        callback(err, result);
    });
};

// update item
exports.update = function (user_id, id_todo, parametr , data, callback) {
    const sql = `UPDATE todo_list SET ${parametr} = '${data}' WHERE user_id = '${user_id}' AND id_todo = '${id_todo}'`;
    db.con.query(sql, function (err, result) {
        callback(err, result);
    });
};

// delete item
exports.delete = function (id, callback) {
    const sql = `DELETE FROM todo_list WHERE id_todo = '${id}'`;
    db.con.query(sql, function (err, result) {
        if (err) throw err;
        callback(err, result);
    });
};