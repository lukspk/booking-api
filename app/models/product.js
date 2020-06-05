'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    type_id: DataTypes.STRING
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasOne(models.Type,{foreignKey: 'id', sourceKey: 'type_id', as : 'types'})
  };
  return Product;
};