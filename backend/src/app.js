const express = require('express')
const routes = require('./routers')
const {PORT} = require('./config/config')
const security = require('./config/security')
const { connectDatabase } = require('./config/database')
const { CustomErrorHandler } = require('./utils/CustomError')
const app =  express()


//config
app.use(security)
app.use(express.json())

//routes
app.use(routes)
app.use(CustomErrorHandler)

app.use('*', (req, res) => {
    res.json({success : false, message : 'route not found'})
})


//start function
app.start = async () => {
    connectDatabase()
        .then(() => app.listen(PORT, () => console.log(`running on port ${PORT} ✅`)))
        .catch(error => console.log(`Database connection failed` , error))
}



module.exports = app