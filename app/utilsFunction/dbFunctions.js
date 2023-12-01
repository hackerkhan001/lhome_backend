const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('lhome' , 'root' , 'kasthuri310' , {
    host : 'localhost',
    dialect : 'mysql'
  });

module.exports = sequelize;  