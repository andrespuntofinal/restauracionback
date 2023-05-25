const { Schema, model } = require('mongoose');

const EventoSchema = Schema({

    id:{

        type: Number,
        required: true
        
    },


    nombreevento:{

        type: String,
        required: true
        
    },

    descripcionevento:{

        type: String
        
    },

    asistentesevento:{

        type: Number
       
        
    },

    fechaevento:{

        type: Date
        
    },

    horarioevento:{

        type: String
        
    },

    estadoevento:{

        type: Number
    }

  

});

EventoSchema.methods.toJSON = function(){

    const { __v, ...data } = this.toObject();
    return data;
}

module.exports = model('Evento', EventoSchema );