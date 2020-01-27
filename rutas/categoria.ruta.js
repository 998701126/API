const express = require('express');
const ruteador = express.Router();
const db = require('../models'); 
const Categoria = db.Categoria;
//const Categoria = require('../models').Categoria;

//GET /Categorias/
ruteador.get('/', function(req, res){
    // promesificada
    Categoria.findAll()
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

// GET /Categorias/5 
ruteador.get('/:id',async function(req, res){
    try {
        const id = req.params.id;
        const prod = await Categoria.findOne({id: id});
        res.json(prod);
    } catch(err) {
        res.status(404).json({error: err});
    }
})

// POST /Categorias/
ruteador.post('/', async function(req, res) {
    try{
        const nuevoProd = await Categoria
                                   .create(req.body);
        res.json(nuevoProd);
    } catch(err){
        res.status(404).json({error: err});
    }
});

// PUT /Categorias/5
ruteador.put('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Categoria.update(req.body,{where: {id: id}});
        res.json({ok: 'ok'})
          
    } catch(error){}
});

//DELETE //Categorias/9
ruteador.delete('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Categoria.destroy({where: {id: id} });
        res.json({ok: 'ok'})
          
    } catch(error){
        res.status(404).json({error: err});
    }
});

module.exports = ruteador;