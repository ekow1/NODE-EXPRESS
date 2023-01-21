const express = require('express')


const router = express.Router();
const Book = require('../models/bookmodel')


const bookList = async (req, res) =>{
    try {

        const books = await Book.find();
        res.json(books)
        
    } catch (error) {
        res.json({message : error})
    }
        
    }
 
const createBook = async(req, res) =>{
    try {

        const books = await Book.create(req.body);
        res.json(books)
        
    } catch (error) {
        res.json({message : error})
    }

}


const specificBook = async(req, res) =>{
    try {

        const book = await Book.findById(req.params.id);
        res.json(book)
        
    } catch (error) {
        res.json({message : error})
    }

}
const updateBook = async(req, res) =>{
    try {

        const updatedBook = await Book.updateOne({_id : req.params.id} , {$set : {title : req.body.title , desc: req.body.desc , author : req.body.author},
        });
        res.json(updatedBook)
        
    } catch (error) {
        res.json({message : error})
    }

}
const deleteBook = async (req, res) =>{

    try {

        const removedBook = await Book.remove({_id : req.params.id});
        res.json(removedBook)
        
    } catch (error) {
        res.json({message : error})
    }

}

router.get( '/' , bookList)
router.get( '/:id' , specificBook)
router.post( '/' , createBook)
router.put( '/:id' , updateBook)
router.delete( '/:id' , deleteBook)


module.exports = router