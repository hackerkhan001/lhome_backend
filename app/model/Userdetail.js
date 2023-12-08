const { DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions'); 


const UserDetail = sequelize.define('UserDetail', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      // defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
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
    mobile: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
      validate: {
        is: /^[0-9]{10}$/i,
      }
    
    },
    currentctc: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    expectedctc: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    preferredlocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    noticeperiod : {
      type : DataTypes.BOOLEAN ,
      defaultValue : false,
    },
  
  });
  sequelize.sync()
  .then(() => {
    console.log('Userdetail table created');
  })
  .catch(err => {
    console.error('Error creating Userdetail table:', err);
  });

module.exports = UserDetail;
