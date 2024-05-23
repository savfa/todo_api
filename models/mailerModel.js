const { sequelize } = require('../db_connection');
const { DataTypes } = require('sequelize');
const nodemailer = require('nodemailer');

const Mailer = sequelize.define('Mailer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
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
  tableName: 'mails'
});

exports.contactMePortfolio = function (name, email, subject, text) {
  return Mailer.create({ name, email, subject, text })
    .then((response) => {
      const { dataValues: mailer } = response;

      const transporter = nodemailer.createTransport({
        host: 'mail.evgeniysavin.ru',
        port: 465,
        auth: {
          user: 'bh63835',
          pass: 'h3kYaEkHmAoVOjB'
        }
      });

      const mailOptions = {
        from: email,
        to: 'savfa@yandex.ru',
        subject,
        text
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      return `success`
    })
};
