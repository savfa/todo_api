const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoController = require('./controllers/todoController');
const crypto = require('crypto');
const {authenticateJWT} = require("./services/authenticateJWT");
const camelcaseMiddleware = require('express-camelcase-response-keys');


const app = express();
app.use(cors({ "origin": true, "credentials": true })); // разрешаем cors
app.use(bodyParser.json()); //необходима, чтобы правильно парсить json
app.use(bodyParser.urlencoded({ extended: true })); // необходима, чтобы правильно парсить данные формы
app.use(camelcaseMiddleware({ deep: true })); // возвращаем в camelcase


app.listen(3001, function () {
  console.log('app API started');
});

app.get('/', function (req, res) {
  res.send('Hello API');
});

app.get('/api/todoList', todoController.all);


// auth
app.post('/api/login/', todoController.login);
app.post('/api/register/', todoController.register);

// user
app.get('/api/todoList/user', authenticateJWT,  todoController.getUser);

// add item
app.post('/api/todoList', todoController.create);

// update item
app.put('/api/todoList/:id', todoController.update);

// delete item
app.delete('/api/todoList/:id', todoController.delete);