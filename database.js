let mongoose = require('mongoose');

class Database {

  constructor() {

    this._connect()

  }

_connect() {

     mongoose.connect(`mongodb+srv://asugam9:yfaff0v9gwrPNkdY@cluster-1.wfp7i.mongodb.net/`)

       .then(() => {

         console.log('Database connection successful')

       })
       .catch(err => {

         console.error('Database connection error',err)

       })

  }

}

module.exports = new Database()
