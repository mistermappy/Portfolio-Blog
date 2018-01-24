const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://kftcubdfwagakv:6f8a0fc821b7d7fdf3d1d0d70062666c70bc766c1d49132f5f8dd5f88847f2fe@ec2-174-129-22-84.compute-1.amazonaws.com:5432/d4c1eo62pgkt6?ssl=true')

const Post = sequelize.define('post', {
  title: {
    type: Sequelize.STRING
  },
  message: {
    type: Sequelize.STRING
  }
});

module.exports = Post; 
