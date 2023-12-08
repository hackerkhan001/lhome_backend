const { DataTypes } = require('sequelize');
const sequelize = require('../utilsFunction/dbFunctions'); // Import your existing database connection

// Define the model
const PortfolioFile = sequelize.define('PortfolioFile', {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    // defaultValue: Sequelize.UUIDV4,
    allowNull:true ,
    primaryKey: true,
  },
    fileName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fileType: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fileSize: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    // Other options (if needed)
    timestamps: true
  });
  
  // Synchronize the model with the database
  sequelize.sync()
    .then(() => {
      console.log('PortfolioFile table created');
    })
    .catch(err => {
      console.error('Error creating PortfolioFile table:', err);
    });
  
  module.exports = PortfolioFile;