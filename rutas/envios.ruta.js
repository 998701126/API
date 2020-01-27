const express = require('express');
const ruteador = express.Router();
const db = require('../models'); 
const Envios = db.Envios;
//const Envios= require('../models').Envios;

//GET /Envios/
ruteador.get('/', function(req, res){
    // promesificada
    Envios.findAll()
    .then(
        function(data){
            res.json(data);            
        }
    ).catch(function(err) {
        res.status(404).json({error: err});
    });
    // Sincrona
    // try {
    //    let data = await Categoria.findAll();
    //    res.json(data)
    // } catch(err) { 
    //     res.status(404).json({error: err});
    // }
})

// GET /Envios/5 
ruteador.get('/:id',async function(req, res){
    try {
        const id = req.params.id;
        const prod = await Envios.findOne({id: id});
        res.json(prod);
    } catch(err) {
        res.status(404).json({error: err});
    }
});

// POST /Envios/
ruteador.post('/', async function(req, res) {
    try{
        const nuevoProd = await Envios
                                   .create(req.body);
        res.json(nuevoProd);
    } catch(err){
        res.status(404).json({error: err});
    }
});

// PUT /Envios
ruteador.put('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Envios.update(req.body,{where: {id: id}});
        res.json({ok: 'ok'})
          
    } catch(error){}
});

//DELETE //Envios
ruteador.delete('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Envios.destroy({where: {id: id} });
        res.json({ok: 'ok'})
          
    } catch(error){
        res.status(404).json({error: err});
    }
});

module.exports = ruteador;