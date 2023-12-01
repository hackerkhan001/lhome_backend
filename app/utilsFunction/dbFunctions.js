const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('lhome' , 'root' , 'root' , {
    host : 'localhost',
    dialect : 'mysql'
  });

module.exports = sequelize;  