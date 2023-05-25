const { Schema, model } = require('mongoose');

const ReservaSchema = Schema({


    id:{

        type: Number,
        required: true
        
    },

  
    identificacion:{

        type: Number,
        required: true
        
    },

    nombre:{

        type: String
        
    },

    celular:{

        type: String
        
    },

    fechaservicio:{

        type: Date
        
    },

    horario:{

        type: String
        
    },

    idevento:{

        type: Number,
        required: true
        
    }

      

});

ReservaSchema.methods.toJSON = function(){

    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Reserva', ReservaSchema );