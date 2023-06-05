const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares');
const { cargarArchivo, actualizarImagen} = require('../controllers/uploads');
const { coleccionesPermitidas } = require('../helpers');

const router = Router();

router.post('/', cargarArchivo);

router.put('/:coleccion/:id', [

    check('id', 'El id debe ser de mongo').isMongoId(),
    check('coleccion').custom( c => coleccionesPermitidas(c, ['usuarios', 'miembros'])),
    validarCampos

], actualizarImagen)

module.exports = router;