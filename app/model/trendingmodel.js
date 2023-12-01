const { DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions');
const Login = require('./userLoginmodel'); // Correct the import statement

const Trend = sequelize.define('Trend' , {
    id : {
        type : DataTypes.INTEGER ,
        primaryKey : true , 
        allowNull : false ,
        autoIncrement : true,
    },
    index : {
        type : DataTypes.BIGINT,
        unique : true,
        allowNull : false
    }
});


module.exports = Trend;
