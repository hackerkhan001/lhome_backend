const { Sequelize, DataTypes } = require('sequelize');
const otpGenerator = require('otp-generator');
const sequelize = require('../utilsFunction/dbFunctions'); 

const Trend = require('./trendingmodel');

const Login = sequelize.define('Login', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[0-9]{10}$/i, // Validate that it's a 10-digit number
    },
  },
  otp: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'logins',
  hooks: {
    beforeCreate: async (login) => {
      // Generate OTP before creating the record
      login.otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
    },
  },
});


module.exports = Login;
