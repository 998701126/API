const express = require('express');
const ruteador = express.Router();
const db = require('../models'); 
const Documentos = db.Documentos;
//const Documentos = require('../models').Documentos;

//GET /Documentos
ruteador.get('/', function(req, res){
    // promesificada
    Documentos.findAll()
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

// GET /Documentos
ruteador.get('/:id',async function(req, res){
    try {
        const id = req.params.id;
        const prod = await Documentos.findOne({id: id});
        res.json(prod);
    } catch(err) {
        res.status(404).json({error: err});
    }
})

// POST /Documentos
ruteador.post('/', async function(req, res) {
    try{
        const nuevoProd = await Documentos
                                   .create(req.body);
        res.json(nuevoProd);
    } catch(err){
        res.status(404).json({error: err});
    }
});

// PUT /Documentos
ruteador.put('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Documentos.update(req.body,{where: {id: id}});
        res.json({ok: 'ok'})
          
    } catch(error){}
});

//DELETE //Documentos
ruteador.delete('/:id', async function(req, res) {
    const id = req.params.id;
    try {
        await Documentos.destroy({where: {id: id} });
        res.json({ok: 'ok'})
          
    } catch(error){
        res.status(404).json({error: err});
    }
});

module.exports = ruteador;