const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');
const { authenticateJWT } = require("../services/authenticateJWT");

router.get(`/api/todos/`, authenticateJWT, todoController.getTodos);
router.post(`/api/todos/`, authenticateJWT, todoController.setTodo);
router.put(`/api/todos/:todoId`, authenticateJWT, todoController.updateTodo);
router.delete(`/api/todos/:todoId`, authenticateJWT, todoController.deleteTodo);

module.exports = router;