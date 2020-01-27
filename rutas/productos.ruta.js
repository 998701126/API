const express = require('express');
const ruteador = express.Router();
const db = require('../models'); 
const Producto = db.Producto;
//const Producto = require('../models').Producto;

//GET /productos/
ruteador.get('/', function(req, res){
    // promesificada
    Producto.findAll()
    .then(
        function(data){
            res.json(data);            
        }
    ).catch(function(err) {
        res.status(404).json({error: err});
    });
    // Sincrona
    // try {
    //    let data = await Producto.findAll();
    //    res.json(data)
    // } catch(err) { 
    //     res.status(404).json({error: err});
    // }
})

// GET /productos/5 
ruteador.get('/:id',async function(req, res){
    try {
        const id = req.params.id;
        const prod = await Producto.findOne({id: id});
        res.json(prod);
    } catch(err) {
        res.status(404).json({error: err});
    }
})

// POST /productos/
ruteador.post('/', async function(req, res) {
    try{
        const nuevoProd = await Producto
                                   .create(req.body);
        res.json(nuevoProd);
    } catch(err){
        res.status(500).json({error: err});
    }
});

// PUT /productos/5
ruteador.put('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Producto.update(req.body,{where: {id: id}});
        res.json({ok: 'ok'})
          
    } catch(error){}
});

//DELETE //productos/9
ruteador.delete('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Producto.destroy({where: {id: id} });
        res.json({ok: 'ok'})
          
    } catch(error){
        res.status(404).json({error: err});
    }
});

module.exports = ruteador;