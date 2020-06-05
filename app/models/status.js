'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    tableName : 'status',
    timestamps : false
  });
  Status.associate = function(models) {
    // associations can be defined here
    Status.hasMany(models.Booking, {foreignKey:'status_id', as : 'bookings'});
  };
  return Status;
};