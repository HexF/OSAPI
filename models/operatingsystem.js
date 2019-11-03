'use strict';
module.exports = (sequelize, DataTypes) => {
  const OperatingSystem = sequelize.define(
      'OperatingSystem',
      {
        name: {type: DataTypes.STRING, unique: false, allowNull: false},
        version: {type: DataTypes.STRING, unique: false, allowNull: false,
        },
      },
      {},
  );
  OperatingSystem.associate = function(models) {
    // associations can be defined here
    OperatingSystem.hasMany(models.Download);
  };
  return OperatingSystem;
};
