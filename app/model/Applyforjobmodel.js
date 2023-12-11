const { DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions');

const UserDetail = sequelize.define('applyforjob', {

    id: {
        type: DataTypes.BIGINT,
        autoIncrement : true,
        // defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
         resume:{
          type: DataTypes.STRING,
            allowNull: false,
             fileName: {
            type: DataTypes.STRING,
            allowNull: false
          },
          filePath: {
            type: DataTypes.STRING,
            allowNull: false
          },
          fileType: {
            type: DataTypes.STRING,
            allowNull: false
          },
          fileSize: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    
  firstname : {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastname : {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  phno :{
    type : DataTypes.BIGINT ,
    allowNull: false ,
    unique: true,
    validate:{
        is: /^[0-9]{10}$/i,
    }
  },

  currentctc: {
    type : DataTypes.BIGINT,
    allowNull : false ,
  },

  expectedctc: {
    type : DataTypes.BIGINT,
    allowNull : false ,
  },

  location : {
    type: DataTypes.STRING,
    allowNull: false,
  },

  nperiod : {
    type : DataTypes.BOOLEAN ,
    defaultValue : false,
  },

  Portfolio:{
    type: DataTypes.STRING,
            allowNull: false,
             fileName: {
            type: DataTypes.STRING,
            allowNull: false
          },
          filePath: {
            type: DataTypes.STRING,
            allowNull: false
          },
          fileType: {
            type: DataTypes.STRING,
            allowNull: false
          },
          fileSize: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    
  

});

module.exports = UserDetail;
