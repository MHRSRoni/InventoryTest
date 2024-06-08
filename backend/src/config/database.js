const mongoose = require('mongoose')
const {DATABASE_URL} = require('./config')

const connectDatabase = async () => {
    await mongoose.connect(DATABASE_URL)
    console.log(`Database connected ✅`)
}


module.exports = {connectDatabase}

