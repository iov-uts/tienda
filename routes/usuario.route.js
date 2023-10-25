const  routerUsuario = require('express').Router();

const Usuario = require('../models/usuario.model');

routerUsuario.get('/', (req, res) => {
    Usuario.find()
    .then(usuarios => res.json(usuarios))
    .catch(err => res.status(400).json('Error: ' + err));
});


routerUsuario.get('/:id', (req, res) => {
    Usuario.findById(req.params.id)
    .then(usuario => res.json(usuario))
    .catch(err => res.status(400).json('Error: ' + err));
});


routerUsuario.delete('/:id', (req, res) => {
    Usuario.findByIdAndDelete(req.params.id)
    .then(() => res.json('Usuario eliminado'))
    .catch(err => res.status(400).json('Error: ' + err));
});

routerUsuario.post('/registrar-usuario', (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const password = req.body.password;
    const documento = req.body.documento;
    const telefono = req.body.telefono;
    const direccion = req.body.direccion;

    const usuario = new Usuario({
        nombre,
        apellido,
        email,
        password,
        documento,
        telefono,
        direccion
    });

    usuario.save()
    .then(() => res.json('Usuario registrado'))
    .catch(err => res.status(400).json('Error: ' + err));
});


routerUsuario.post('/actualizar/:id', (req, res) => {
    Usuario.findById(req.params.id)
    .then(usuario => {
        usuario.nombre = req.body.nombre,
        usuario.apellido = req.body.apellido,
        usuario.email = req.body.email,
        usuario.password = req.body.password,
        usuario.documento = req.body.documento,
        usuario.telefono = req.body.telefono,
        usuario.direccion = req.body.direccion

        usuario.save()
        .then(() => res.json('usuario actualizado'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = routerUsuario;
