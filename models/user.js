'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { 
          msg: "Username must not be null!"
        },
        len: {
          args: [0, 8],
          msg: "Username must not be more than 8 characters!"
        },
        isIn: {
          args: [ ["papaya", "eggyolk"] ],
          msg: "Username must be either papaya or eggyolk!"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email must not be null!"
        }
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, {foreignKey: "userId"});
    
    // User --> Post --> Subbreaddit
    const columnMapping = {
      through: "Post", // association
      foreignKey: "userId",
      otherKey: "subId"
    };
    User.belongsToMany(models.Subbreaddit, columnMapping);
  };
  return User;
};