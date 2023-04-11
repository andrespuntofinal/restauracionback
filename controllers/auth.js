const { response } = require('express');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');

const login = async(req, res = response ) => {

    const { email, uid } = req.body;

    try {

        //verificar email

        const usuario = await Usuario.findOne({ email });

        if ( !usuario ) {

            return res.status(400).json({

                msg: 'Usuario - Contraseñea no son correctos - email'

            });
            
        }

        // verificar estado del usuario
        if ( !usuario.estado ) {

            return res.status(400).json({

                msg: 'Usuario - Contraseñea no son correctos - estado'

            });
            
        }

        // verificar uid

        const usuarioid = await Usuario.findOne({ uid });

        if ( !usuarioid ) {

            return res.status(400).json({

                msg: 'Usuario - Contraseñea no son correctos - uid'
                

            });
            
        }

        //generar JWT

        const token = await generarJWT( usuario.uid );


        res.json({

            usuario,
            token

        })
        
    } catch (error) {

        console.log(error)

        res.status(500).json({
            msg: 'Comuniquese con el administrador'
        });
        
    }

 
}

module.exports = {

    login

}