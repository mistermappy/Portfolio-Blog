const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:nppsjuoll@localhost:5432/portfolio')

const Post = sequelize.define('post', {
  title: {
    type: Sequelize.STRING
  },
  message: {
    type: Sequelize.STRING
  }
});

module.exports = Post; 
