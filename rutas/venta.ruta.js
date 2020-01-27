const express = require('express');
const ruteador = express.Router();
const db = require('../models'); 
const Venta = db.Venta;
const VentaProducto = db.VentaProducto;

ruteador.get('/', async function(req, res) {
    try {
        const ventas = await Venta.findAll(
            {include: [{
                model: VentaProducto,
                attributes: ['cantidad', 'precioUnitario']
            }]}
        );
        res.json(ventas);
    } catch(err){
        // solo para desarrollo
        res.status(500).json({error: err});
        // para produccion
        // res.status(500).json({error: 'error interno'});
    }
});

ruteador.post('/', async function(req, res) {
    try {
        const nuevaVenta = await Venta.create(req.body);
        res.json(nuevaVenta);
    } catch(err){
        res.status(500).json({error: err});
    }
});

module.exports = ruteador;