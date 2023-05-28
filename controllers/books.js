const { response, request } = require('express');
const Book = require('../models/book');


const booksGet =async (req = request, res = response) => {

      // const { limite = 5, desde = 0 } = req.query;
      const query = { estado: true };
    
     
      const books = await 
        
         Book.find(query)
         
        res.json( books );
}

const booksGetById =async (req = request, res = response) => {

    const { id } = req.params;

    //console.log("obtener id", id)
    
    const book = await Book.findById( id )
    
    res.json( book );
}


module.exports = {
    booksGet,
    booksGetById
}