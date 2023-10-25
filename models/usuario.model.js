const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: { type: String, trim: true, required: true, minlength: 3},
    apellido: { type: String, trim: true, required: true, minlength: 3} ,
    email: { type: String, trim: true, required: true, minlength: 3},
    password: { type: String, trim: true, required: true, minlength: 5},
    documento: { type: Number, trim: true, required: true},
    telefono: { type: Number, trim: true},
    direccion: { type: String, trim: true, required: true, minlength: 3}
}, {
    timestamps: true,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
