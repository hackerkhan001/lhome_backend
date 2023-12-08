const { DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions'); // Import your existing database connection

// Define the model
const ResumeUpload = sequelize.define('ResumeUpload', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    // defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
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
  }, {
    // Other options (if needed)
    timestamps: true
  });
  
  // Synchronize the model with the database
  sequelize.sync()
    .then(() => {
      console.log('SingleFile table created');
    })
    .catch(err => {
      console.error('Error creating SingleFile table:', err);
    });
  
  module.exports = ResumeUpload;