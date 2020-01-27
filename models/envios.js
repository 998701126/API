module.exports = (sequelize, DataTypes) => {
    const Envios = sequelize.define('Envios', 
     {
         departamento: DataTypes.STRING(191),
         provincia: DataTypes.STRING(191),
         precio: DataTypes.DECIMAL
     }
    );
    Envios.sync({force: true});
    return Envios;
 }