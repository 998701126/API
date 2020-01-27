module.exports = (sequelize, DataTypes) => {
    const Pagos = sequelize.define('Pagos', 
     {
         
         codigo_referencia: DataTypes.STRING(191),
         monto: DataTypes.DECIMAL
     }
    );
    Pagos.sync({force: true});
    return Pagos;
 }