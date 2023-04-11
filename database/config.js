
const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

       await mongoose.connect( process.env.MONGODB_CNN )
       

       console.log('DB Online');
        
    } catch (error) {

        console.error(error);

        throw new Error('Error en la DB')
        
    }


}

module.exports = {
    dbConnection

}