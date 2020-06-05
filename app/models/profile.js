'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    tableName : 'profiles',
    timestamps : false
  });
  Profile.associate = function(models) {
    // associations can be defined here
    Profile.hasMany(models.User, { foreignKey: 'profile_id', as: 'users' })
  };
  return Profile;
};