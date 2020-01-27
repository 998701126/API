module.exports = (sequelize, DataTypes) => {
    const Verificar_Clientes = sequelize.define('Verificar_Clientes', 
     {
         nombre: DataTypes.STRING(191),
         imagen: DataTypes.STRING(191),
        
     }
    );
    Verificar_Clientes.sync({force: true});
    return Verificar_Clientes;
 }