const express = require('express');
const ruteador = express.Router();
const db = require('../models'); 
const Pagos = db.Pagos;
//const Pagos = require('../models').Pagos ;

//GET /Pagos 
ruteador.get('/', function(req, res){
    // promesificada
    Pagos.findAll()
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

// GET /Pagos 
ruteador.get('/:id',async function(req, res){
    try {
        const id = req.params.id;
        const prod = await Pagos.findOne({id: id});
        res.json(prod);
    } catch(err) {
        res.status(404).json({error: err});
    }
});

// POST /Pagos 
ruteador.post('/', async function(req, res) {
    try{
        const nuevoProd = await Pagos
                                   .create(req.body);
        res.json(nuevoProd);
    } catch(err){
        res.status(404).json({error: err});
    }
});

// PUT /Pagos 
ruteador.put('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Pagos.update(req.body,{where: {id: id}});
        res.json({ok: 'ok'})
          
    } catch(error){}
});

//DELETE //Pagos 
ruteador.delete('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Pagos.destroy({where: {id: id} });
        res.json({ok: 'ok'})
          
    } catch(error){
        res.status(404).json({error: err});
    }
});

module.exports = ruteador;