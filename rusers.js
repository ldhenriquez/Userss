//rutas users
const express = require('express');
const router = express.Router();
const usercontrol = require('../control/usercontrol');

//api/user
/* router.post('/', () => {
    console.log('creando');
}) */
router.post('/', (usercontrol.crearuser));
router.get('/', (usercontrol.obteneruser));
router.put('/:id', (usercontrol.cambiaruser)); 

module.exports = router;