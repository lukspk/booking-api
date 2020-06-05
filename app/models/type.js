'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Type.associate = function(models) {
    // associations can be defined here
    Type.hasMany(models.Product, {foreignKey: 'type_id', as: 'products'})
  };
  return Type;
};