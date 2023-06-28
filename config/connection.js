const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
  
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
  const urlParts = new URL(process.env.DATABASE_URL);
  console.log('urlParts:', urlParts);


  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    logging: false
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || 'localhost',
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306
    }
  );
}

module.exports = sequelize;

