const  routerProducto = require('express').Router();

const Producto = require('../models/producto.model');

routerProducto.get('/', (req, res) => {
    Producto.find()
    .then(productos => res.json(productos))
    .catch(err => res.status(400).json('Error: ' + err));
});


routerProducto.get('/:id', (req, res) => {
    Producto.findById(req.params.id)
    .then(producto => res.json(producto))
    .catch(err => res.status(400).json('Error: ' + err));
});


routerProducto.delete('/:id', (req, res) => {
    Producto.findByIdAndDelete(req.params.id)
    .then(() => res.json('Producto eliminado'))
    .catch(err => res.status(400).json('Error: ' + err));
});

routerProducto.post('/registrar-producto', (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const unidad_medida = req.body.unidad_medida;
    const cantidad = req.body.cantidad;
    const categoria = req.body.categoria;

    const producto = new Producto({
        nombre,
        descripcion,
        precio,
        unidad_medida,
        cantidad,
        categoria
    });

    producto.save()
    .then(() => res.json('producto registrado'))
    .catch(err => res.status(400).json('Error: ' + err));
});


routerProducto.post('/actualizar-producto/:id', (req, res) => {
    Producto.findById(req.params.id)
    .then(producto => {
        producto.nombre = req.body.nombre,
        producto.descripcion = req.body.descripcion,
        producto.precio = req.body.precio,
        producto.unidad_medida = req.body.unidad_medida,
        producto.cantidad = req.body.cantidad,
        producto.categoria = req.body.categoria

        producto.save()
        .then(() => res.json('producto actualizado'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = routerProducto;
