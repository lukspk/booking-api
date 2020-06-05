'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    date_start: DataTypes.DATE,
    date_finish: DataTypes.DATE,
    status_id: DataTypes.STRING
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
    Booking.hasOne(models.Status,{foreignKey : 'id', sourceKey: 'status_id', as : 'status'});
  };
  return Booking;
};