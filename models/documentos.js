module.exports = (sequelize, DataTypes) => {
    const Documentos = sequelize.define('Documentos', 
     {
         nombre: DataTypes.STRING(191),
         
     }
    );
    Documentos.sync({force: true});
    return Documentos;
 }