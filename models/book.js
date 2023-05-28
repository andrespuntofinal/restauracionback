const { Schema, model } = require('mongoose');

const BookSchema = Schema({
    name: {

        type: String
    },
    image: {

        type: String
    },
    author: {

        type: String
    },
    description: {

        type: String
    },
    countInStock: {

        type: Number
    },
    price: {

        type: Number
    },

    estado:{

        type: Boolean,
        default: true
    }
    

});


module.exports = model('Book', BookSchema );

