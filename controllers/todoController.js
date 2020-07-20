const todo = require('../models/todoModel');

exports.all = function (req, res) {
    todo.all(function (err, result) {
        if (err) throw err;
        res.send(result);
    })
};




//auth
exports.getAuth = function (req, res) {
    const login = req.body.login;
    const password = req.body.password;
    todo.getAuth( login, password,  function (err, result) {
        if (err) throw err;
        res.send(result[0]);
    })
};

exports.findById = function (req, res) {
    todo.findById(req.params.id,function (err, result) {
        if (err) throw err;
        res.send(result);
    })
};

exports.setRegistration = function (req, res) {
    const login = req.body.login;
    const password = req.body.password;
    const email = req.body.email;
    todo.setRegistration( login, password, email,  function (err, result) {
        if (err) throw err;
        res.send(result);
    })
};

// add item
exports.create = function (req, res) {
    todo.create(req.body.user_id, req.body.newItem, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
};

// update item
exports.update = function (req, res) {
    todo.update(req.params.id, req.body.id_todo, req.body.parametr, req.body.data, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
};

// delete item
exports.delete = function (req, res) {
    todo.delete(req.params.id,function (err, result) {
        if (err) throw err;
        res.send(result);
    })
};