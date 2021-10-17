const {Bag} = require('../models/Bag');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


router.get(`/`, async (req, res) =>{
    const bagList = await Bag.find().select('-passwordHash');

    if(!bagList) {
        res.status(500).json({success: false})
    } 
    res.send(bagList);
})

router.get(`/pack/:id`, async (req, res) =>{
    const client = req.params.id
    const bag = await Bag.find({ client: client }).exec();
    if(!bag) {
        res.status(500).json({success: false})
    } 
    res.send(bag);
})

router.post(`/bagItem`, async (req, res) =>{

    let bag = new Bag({
        name: req.body.name,
        image: req.body.image,
        client: req.body.client,
    })

    bag = await bag.save();

    if(!bag) 
    return res.status(500).send('The bag  cannot be created')

    res.send(bag);
})



router.delete('/:id', (req, res)=>{
    Bag.findByIdAndRemove(req.params.id).then(bag =>{
        if(bag) {
            return res.status(200).json({success: true, message: 'the bag is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "bag not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})


module.exports =router;