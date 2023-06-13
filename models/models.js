const { Sequelize, Model, DataTypes } = require('sequelize');

// Sequelize
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// User and Blog Models
class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: 'user' }
);

class BlogPost extends Model {}
BlogPost.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  },
  { sequelize, modelName: 'blogPost' }
);

module.exports = {
  User,
  BlogPost,
  sequelize,
};
