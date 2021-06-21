/* console.log('desde index.js') */
const express = require('express');
const conectardb = require('./config/db');
const cors = require("cors");

//Crear Servidor
const app = express();

//conectar db
conectardb();

app.use(cors());

app.use(express.json());

app.use('/api/users', require('./routes/rusers'));


//ruta principal
/* app.get('/',(req,res) => {
    res.send('Hola mundo')
})  */


app.listen(4000, () => {
    console.log('Servidro funciona')
})