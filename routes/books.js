const express = require('express')
const router = express.Router()
const Book = require('../models/Book')
const User = require('../models/User')




router.post('/books',(req,res,next)=>{
    console.log('book:',req.body)
    Book.create({
        bookName: req.body.bookName,
        donationDate: req.body.donationDate,
        bookAuthor: req.body.bookAuthor,
        editorial: req.body.editorial,
        studentName: req.body.studentName,
        studentId: req.body.studentId,
        studentCareer: req.body.studentCareer,
        period: req.body.period,
        title: req.body.title,
        description: req.body.description,
        user: req.body.user
    })
        .then(response => {
            console.log('book created',response)
            User.findByIdAndUpdate(req.body.user,{$push:{books:response._id}})
                .then(response => res.json(response))

        })
        .catch(e=> res.json(e))
})

router.get('/books',(req,res,next)=>{
    console.log('running post')
    Book.find()
        .then(response =>{
            console.log(response)
            res.json(response)
        })
        .catch(e => res.json(e))
})

router.get('/books/:id',(req,res,next)=>{
    const {id} = req.params
    Book.findById(id)
        .then(response => res.json(response))
        .catch(e => res.json(e))
})

router.put('/book/:id',(req,res,next)=>{
    const {id} = req.params
    Book.findByIdAndUpdate(id,{$set: req.body})
        .then(response => res.json({message:"Book updates"}))
        .catch(e=> res.json(e))
})

router.delete('/books/:id',(req,res,next)=>{
    const {id} = req.params
    Book.findByIdAndRemove(id)
        .then(response => res.json({message: "Libro eliminado"}))
        .catch(e=> res.json(e))
})



module.exports = router