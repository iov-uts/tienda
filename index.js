const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();


app.use(express.json());

// conexion con la base de datos
const uri = process.env.URI || "mongodb://localhost:27017/dbtienda";
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('La conexion fue establecida con exito');
});




// routers 
const usuarioRouter = require('./routes/usuario.route');
const productoRouter = require('./routes/producto.route');
app.use('/usuarios', usuarioRouter);
app.use('/productos', productoRouter);



// servidor escuchando
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
