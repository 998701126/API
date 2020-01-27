const db = require('./models');

const Producto = db.Producto;

Producto.findAll().then(
    function(datos) {
        //console.log(datos);
    }
);

Producto.create({
    name: 'Mouse',
    descripcion: 'mouse 1',
    precio: 48
}).then(
    function(respuesta){
        console.log(respuesta);
    }
);