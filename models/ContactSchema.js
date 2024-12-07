let mongoose = require('mongoose');

const contact = mongoose.model('Contact',ContactSchema);
module.exports = contact;