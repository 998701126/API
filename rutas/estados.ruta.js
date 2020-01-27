const express = require('express');
const ruteador = express.Router();
const db = require('../models'); 
const Estados = db.Estados;
//const Estados = require('../models').Estados;

//GET /Estados
ruteador.get('/', function(req, res){
    // promesificada
    Estados.findAll()
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

// GET /Estados
ruteador.get('/:id',async function(req, res){
    try {
        const id = req.params.id;
        const prod = await Estados.findOne({id: id});
        res.json(prod);
    } catch(err) {
        res.status(404).json({error: err});
    }
});

// POST /Estados
ruteador.post('/', async function(req, res) {
    try{
        const nuevoProd = await Estados
                                   .create(req.body);
        res.json(nuevoProd);
    } catch(err){
        res.status(404).json({error: err});
    }
});

// PUT /Estados
ruteador.put('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Estados.update(req.body,{where: {id: id}});
        res.json({ok: 'ok'})
          
    } catch(error){}
});

//DELETE //Estados
ruteador.delete('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Estados.destroy({where: {id: id} });
        res.json({ok: 'ok'})
          
    } catch(error){
        res.status(404).json({error: err});
    }
});

module.exports = ruteador;