const todoModel = require('../models/todoModel');

exports.getTodos = function (req, res) {
  const { id } = req.user;

  todoModel.getTodos(id).then((todos) => res.send({ data: todos }))
    .catch((err) => {
      res.status(400);
      res.json({ error: err.message });
    })
};

exports.setTodo = function (req, res) {
  const { id } = req.user;
  const { label } = req.body;

  todoModel.setTodo({user_id: id, label}).then((todo) => res.send({ data: todo }))
    .catch((err) => {
      res.status(400);
      res.json({ error: err.message });
    })
};

exports.updateTodo = function (req, res) {
  const { todoId } = req.params;

  todoModel.updateTodo(todoId, req.body).then((todo) => res.send({ data: todo }))
    .catch((err) => {
      res.status(400);
      res.json({ error: err.message });
    })
};

exports.deleteTodo = function (req, res) {
  const { todoId } = req.params;

  todoModel.deleteTodo(todoId).then((todo) => res.send({ data: todo }))
    .catch((err) => {
      res.status(400);
      res.json({ error: err.message });
    })
};


/*
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
};*/
