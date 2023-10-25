const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: { type: String, trim: true, required: true, minlength: 3},
    descripcion: { type: String, trim: true, required: true} ,
    precio: { type: Number, trim: true, required: true},
    unidad_medida: { type: String, trim: true, required: true},
    cantidad: { type: Number, trim: true},
    categoria: { type: String, trim: true, required: true, minlength: 3}
}, {
    timestamps: true,
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
