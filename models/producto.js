'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    name: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    precio: DataTypes.INTEGER
  }, {});
  Producto.associate = function(models) {
    // associations can be defined here
  };
  return Producto;
};