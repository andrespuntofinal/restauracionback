const miembro = require('../models/miembro');
const Role = require('../models/role');
const Ministerio = require('../models/ministerio');
const Usuario = require('../models/usuario');

const esRolValido = async (rol='') => {
    const existeRol = await Role.findOne({ rol });

    if ( !existeRol ) {
        throw new Error(`El rol ${rol} no está registrado en la DB`);
        
    }
}

const esMinisterioValido = async (ministerio='') => {
    const existeministerio = await Ministerio.findOne({ ministerio });

    if ( !existeministerio ) {
        throw new Error(`El ministerio ${ministerio} no está registrado en la DB`);
        
    }
}

const emailExiste = async (email ='') => {
     //Verificar correo
     const existeEmail = await Usuario.findOne({ email })

     if ( existeEmail ) {
        throw new Error(`El Correo ${email} ya está registrado`);
     }
  
}

const existeUsuarioPorId = async ( id ) => {
    //Verificar correo
    const existeUsuario = await Usuario.findById(id);

    if ( !existeUsuario ) {
       throw new Error(`El id no existe ${ id }`);
    }
 
}

const existeMiembroPorId = async ( id ) => {
    //Verificar correo
    const existeMiembro = await miembro.findById(id);

    if ( !existeMiembro ) {
       throw new Error(`El id no existe ${ id }`);
    }
 
}




module.exports = {

    esRolValido,
    esMinisterioValido,
    emailExiste,
    existeUsuarioPorId,
    existeMiembroPorId
}