const { Router } = require('express');
const { check } = require('express-validator');

const { booksGet,
        booksGetById
        } = require('../controllers/books');



const router = Router();

router.get('/', [
 
], booksGet );

router.get('/:id', [
    
 ], booksGetById );


module.exports = router;