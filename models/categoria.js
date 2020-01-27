module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', 
     {
         nombre: DataTypes.STRING(50),
         descripcion: DataTypes.TEXT,
         imagen: DataTypes.STRING
     }
    );
    Categoria.sync({force: true});
    return Categoria;
 }