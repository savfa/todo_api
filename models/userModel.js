const { getPasswordHash } = require("../services/password");
const { sequelize } = require('../db_connection');
const { DataTypes } = require('sequelize');
const _ = require('lodash');

const { TodoList } = require('./todoModel');


const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
}, {
  tableName: 'Users'
});

User.hasMany(TodoList, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
TodoList.belongsTo(User,
{
  foreignKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

exports.checkUser = function (id, email) {
  return User.findOne({ where: { id, email }, raw: true })
    .then((user) => {
      if (!user) return Promise.reject(new Error(`User not found`));
      return _.omit(user, [`password`])
    })
};

exports.getLogin = function (email, password) {
  return User.findOne({ where: { email, password: getPasswordHash(password) }, raw: true })
    .then((user) => {
      if (!user) return Promise.reject(new Error(`User email or password incorrect`));
      return _.omit(user, [`password`])
    })
};

exports.setRegistration = function (login, email, password) {
  return User.create({ login, email, password })   // .get({plain:true})
    .then((response) => {
      const { dataValues: user } = response;
      return _.omit(user, [`password`])
    })
};
