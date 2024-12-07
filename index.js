import express from 'express';
import mongoose from 'mongoose';

require('./database');
const contactModel = require('./models/ContactSchema');

const app = express();
const PORT = 3000;

//database connection
mongoose.connect()


app.get('/', (req, res) =>{
    res.send('Server');
});

app.listen(PORT, () =>{
    console.log(`Server is runing on port ${PORT}`);
});