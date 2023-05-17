const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId

const Users = require('../models/users.model.js');

router.get('/',(req,res) => {

    Users.find()
        .then(data => res.send(data))
        .catch(err => console.log(err))

})

router.get('/:id',(req,res) => {

    if(ObjectId.isValid(req.params.id) == false)
    res.status(400).json({
        error: 'given object is not valid'
    })

    else{
        
    }

    Users.findById(req.params.id)
        .then(data => {
            
            if(data)
            res.send(data)
        
            else{
                res.status(404).json({
                    error: "no record with given _id " + req.params.id 
                })
            }
        })
        .catch(err => console.log(err))

})

router.post('/',(req,res) => {

    Users.create(req.body)
        .then(data => res.status(201).json(data))
        .catch(err => console.log(err))
})


module.exports = router;