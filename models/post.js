'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    subId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};