const {  response, request } = require('express');

const  Miembro  = require('../models/miembro');


const crearMiembro = async (req, res = response) =>{

    const nombre = req.body.nombre.toUpperCase();
    const email = req.body.email;
    const telefono = req.body.telefono;
    const barrio = req.body.barrio;
    const direccion = req.body.direccion;
    const sexo = req.body.sexo;
    const poblacion = req.body.poblacion;
    const estado_civil = req.body.estado_civil;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const imagen = req.body.imagen;
    const tipo_miembro = req.body.tipo_miembro;
    const bautizado = req.body.bautizado;
    const fecha_membresia = req.body.fecha_membresia;
    const ministerio_miembro = req.body.ministerio_miembro;


    //generar data a guardar

    const data = {

        nombre,
        telefono, 
        email, 
        barrio, 
        direccion, 
        sexo, 
        poblacion, 
        estado_civil,
        fecha_nacimiento, 
        imagen, 
        tipo_miembro, 
        bautizado, 
        fecha_membresia, 
        ministerio_miembro,
        usuario: req.usuario._id
    }

    console.log("hhhhhh", data);

    const miembro = new Miembro( data );

    //guardar en DB

    await miembro.save();

    res.status(201).json(miembro);

}

module.exports = {
    crearMiembro

}