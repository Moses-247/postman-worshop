let mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({ 
    fullname: String, 
    email: String,
    phonenumber: String,

})

const contact = mongoose.model('Contact', contactSchema);
module.exports = contact;