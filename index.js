const express = require('express');
const mongoose = require('mongoose');

require('./database');



// import express from 'express';
// import mongoose from 'mongoose';
// import './database.js'; // Make sure to include the extension

const contactModel = require ('./models/ContactSchema.js'); // Include the extension

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Database connection
mongoose.connect('mongodb+srv://asugam9:yfaff0v9gwrPNkdY@cluster-1.wfp7i.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
});

app.get('/helloworld' ,(req,res)=>{
    res.send('my first helloworld');
    });
//an api for creating contact resource
app.post('/create-contact',async(req,res)=>{
    // const {name,email,phone}=req.body;
    const newContact=req.body
    try{
        const createContact =await contactModel.create(newContact)
        res.status(201).send('contact created successfully')
    }
    catch(err){
        console.log('error creating contact',err);
    }
});

app.patch('/contacts/:id', async(req, res) =>{

    const {id} = req.params
    try{
        const updatedContact = await contactModel.findbyIdAndUpdate({_id:id},{...req.body})
        
        res.status(200).json({message: 'Contact update succesfully', data: updatedContact})
    }
    catch(err){
        console.log('error updating contact',err);
    }
    
});

app.get('/contacts', async(req, res) =>{
    try{
        const allContcats =  await contactModel.find()
        res.status(200).json({data: allContcats})
    }
    catch(err){
        console.log('error fetching contact',err);
    }
});

app.delete('/contacts/:id', async(req, res) =>{

    const {id} = req.params
    try{
        const deletedContact = await contactModel.findOneAndDelete({_id:id})
        
        res.status(200).json({message: 'Contact deleted succesfully', data: deletedContact})
    }
    catch(err){
        console.log('error deleting contact',err);
    }
    
});

app.get('/contacts/:id', async(req, res) =>{

    const {id} = req.params
    try{
        const getContact = await contactModel.findbyId({_id:id})
        
        res.status(200).json({message: 'Contact found succesfully', data: getContact})
    }
    catch(err){
        console.log('error finding contact',err);
    }
    
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
