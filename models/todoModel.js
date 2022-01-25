const { sequelize } = require('../db_connection');
const { DataTypes } = require('sequelize');

const TodoList = sequelize.define('TodoList', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  important: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  sort: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
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
  tableName: 'todo_list'
});

exports.TodoList = TodoList;

exports.getTodos = function (userId) {
  return TodoList.findAll({ where: { user_id: userId }, raw: true })
    .then((todos) => {
      return todos;
    })
};

exports.setTodo = function (createObj) {
  return TodoList.create(createObj)
    .then((response) => {
      const { dataValues: todo } = response;
      return todo;
    })
};

exports.updateTodo = function (id, updateObj) {
  return TodoList.update({...updateObj},{ where: { id } })
    .then(([affectedCount, affectedRows]) => {
      return TodoList.findOne({ where: { id }, raw: true });
    })
};

exports.sortTodos = async function (sortTodos, userId) {
  const bulkUpdate = async (updateItems) => {
    const itemShift = updateItems.shift();

    await TodoList.update({sort: itemShift.sort },{ where: { user_id: userId, id: itemShift.id } })

    if (updateItems.length > 0) {
      await bulkUpdate(updateItems);
    }
  };

  await bulkUpdate(sortTodos)

  return `success`
};

exports.deleteTodo = function (id) {
  return TodoList.findOne({ where: { id }, raw: true })
    .then((todo) => {
      return TodoList.destroy({ where: { id }})
        .then(() => todo)
    })
};
