const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {authenticateJWT} = require("./services/authenticateJWT");
const camelcaseMiddleware = require('express-camelcase-response-keys');
// TODO: разнести по файлам
const todoController = require('./controllers/todoController');

const { sequelize } = require('./db_connection');

const app = express();
app.use(cors({ "origin": true, "credentials": true })); // разрешаем cors
app.use(bodyParser.json()); //необходима, чтобы правильно парсить json
app.use(bodyParser.urlencoded({ extended: true })); // необходима, чтобы правильно парсить данные формы
app.use(camelcaseMiddleware({ deep: true })); // возвращаем в camelcase

app.use('/', require('./routes/index'));
app.use('/', require('./routes/userRouter'));
app.use('/', require('./routes/todoRouter'));

// синхронизация с бд, после успшной синхронизации запускаем сервер
sequelize.sync({ alter: true }).then(()=>{
  app.listen(3001, function () {
    console.log('app API started');
  });

}).catch(err=> console.log(err));
