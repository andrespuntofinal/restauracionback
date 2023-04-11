const { Schema, model } = require('mongoose');

const UserSchema = Schema({

    nombre:{

        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    email:{

        type: String,
        required: [true, 'El correo es obligatorio']
        
    },

    rol:{

        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },

    uid:{

        type: String,
        required: [true, 'El uid es obligatorio']
    },

    estado:{

        type: Boolean,
        default: true
    }



});

module.exports = model('Usuario', UserSchema );