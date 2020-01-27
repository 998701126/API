module.exports = (sequelize, DataTypes) => {
    const VentaProducto = sequelize.define('VentaProducto', 
     {
       cantidad: DataTypes.INTEGER,
       precioUnitario: DataTypes.DECIMAL,
       ventaId: DataTypes.INTEGER,
     }
    );
    VentaProducto.associate = function(models) {
        VentaProducto.belongsTo(models.Venta);
    }
    VentaProducto.sync({force: true});
 
    return VentaProducto;
 }