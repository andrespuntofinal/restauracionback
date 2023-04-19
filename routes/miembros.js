const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos } = require('../middlewares');
const { crearMiembro } = require('../controllers/miembros');

const router = Router();


//obtener todos los miembros
router.get('/', (req, res) => {

    res.json('get');

});

//obtener un miembro por id
router.get('/:id', (req, res) => {

    res.json('get id');

});

//crear un miembro
router.post('/',  [ 
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearMiembro);

//actualizar un miembro
router.put('/:id', (req, res) => {

    res.json('put');

});

//eliminar un miembro
router.delete('/:id', (req, res) => {

    res.json('delete');

});





module.exports = router;