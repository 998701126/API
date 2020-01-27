module.exports = (sequelize, DataTypes) => {
    const Venta = sequelize.define('Venta', 
     {
        fecha: DataTypes.DATE,
        total: DataTypes.DECIMAL
     }
    );
    Venta.associate = function(models) {
      Venta.hasMany(models.VentaProducto, {
         foreignKey: 'ventaId',
         onDelete: 'CASCADE'
     });
    };

    Venta.sync({force: true});
 
    return Venta;
 }