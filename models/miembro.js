const { Schema, model } = require('mongoose');

const MiembroSchema = Schema({

    nombre:{

        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    numero_id:{

        type: String
        
    },

    email:{

        type: String
        
    },

    telefono:{

        type: String
        
    },

    barrio:{

        type: String
        
    },

    direccion:{

        type: String
        
    },

    sexo:{

        type: String,
        emun: ['MASCULINO', 'FEMENINO']
        
    },

    poblacion:{

        type: String,
        emun: ['INFANTE', 'NIÑO', 'ADOLESCENTE', 'JOVEN', 'ADULTO', 'ANCIANO']
        
    },

    estado_civil:{

        type: String,
        emun: ['CASADO', 'SOLTERO', 'UNION LIBRE', 'OTRO']
        
    },

    fecha_nacimiento:{

        type: String
        
    },

    imagen:{

        type: String
        
    },

    tipo_miembro:{

        type: String,
        emun: ['LIDER', 'NUEVO', 'ASISTENTE', 'PASTOR']
        
    },

    bautizado:{

        type: String,
        emun: ['SI', 'NO']
        
    },

    fecha_membresia:{

        type: String
        
    },

    lider_contacto:{

        type: String
        
    },

    
    ministerio_miembro:{

        type: String,
        emun: ['ALABANZA', 'DIACONADO', 'EVANGELISMO', 'MAESTRO ED', 'JOVENES', 'MEDIOS', 'LIDER CELULA', 'VENTAS', 'OTROS']
        
    },

    
    estado:{

    type: Boolean,
    default: true
    },

    usuario: {

        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }



});

MiembroSchema.methods.toJSON = function(){

    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Miembro', MiembroSchema );