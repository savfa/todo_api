const todo = require('../models/todoModel');
const jwt = require("jsonwebtoken");
const {JsonWebTokenError} = require("jsonwebtoken");
const {accessTokenSecret} = require("../services/authenticateJWT");
const _ = require('lodash');



exports.all = function (req, res) {
  todo.all(function (err, result) {
    if (err) throw err;
    res.send(result);
  })
};


// login
exports.login = function (req, res) {
  const { email, password } = req.body;

  todo.getLogin( email, password,  function (err, users) {
    if (err || !users.length) {
      //'login or password incorrect'
      res.send('Username or password incorrect')
    }
    if (users.length) {
      const accessToken = jwt.sign({
        id: users[0]?.user_id,
        username: users[0]?.user_name
      }, accessTokenSecret);
      res.send({
        user:  _.omit(users[0], [`user_password`]),
        token: { access: accessToken },
      });
    }
  })
};

// register
exports.register = function (req, res) {
  const login = req.body.login;
  const password = req.body.password;
  const email = req.body.email;
  const user = {login, password, email};
  const accessToken = jwt.sign(user, accessTokenSecret);
  todo.setRegistration( login, password, email, accessToken,  function (err, result) {
    if (err) throw err;
    res.send(result);
  })
};
exports.getUser = function (req, res) {
  debugger
  todo.getUser(function (err, result) {
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