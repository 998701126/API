module.exports = (sequelize, DataTypes) => {
    const Estados = sequelize.define('Estados', 
     {
         nombre: DataTypes.STRING(191)
        
     }
    );
    Estados.sync({force: true});
    return Estados;
 }