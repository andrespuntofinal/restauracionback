const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async (rol='') => {
    const existeRol = await Role.findOne({ rol });

    if ( !existeRol ) {
        throw new Error(`El rol ${rol} no está registrado en la DB`);
        
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

module.exports = {

    esRolValido,
    emailExiste,
    existeUsuarioPorId
}