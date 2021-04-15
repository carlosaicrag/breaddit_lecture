'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER, // foreign key
    subId: DataTypes.INTEGER, // foreign key
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, {foreignKey: "userId"});
    Post.belongsTo(models.Subbreaddit, {foreignKey: "subId"});
  };
  return Post;
};