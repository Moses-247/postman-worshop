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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 
