const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const todoController = require('./controllers/todoController');
const crypto = require('crypto');

const app = express();
app.use(cors({
    "origin": true,
    "credentials": true
}));

app.use(bodyParser.json()); //необходима, чтобы правильно парсить json
app.use(bodyParser.urlencoded({ extended: true })); //необходима, чтобы правильно парсить данные формы

app.listen(3000, function () {
    console.log('app API started');
});

app.get('/', function (req, res) {
    res.send('Hello API');
});

app.get('/api/todoList', todoController.all);









// auth
app.post('/api/todoList/auth', todoController.getAuth);
app.get('/api/todoList/auth/:id', todoController.findById);
app.post('/api/todoList/registration', todoController.setRegistration);

// add item
app.post('/api/todoList', todoController.create);

// update item
app.put('/api/todoList/:id', todoController.update);

// delete item
app.delete('/api/todoList/:id', todoController.delete);