const helmet = require('helmet')
const hpp = require('hpp')
const cors = require('cors')

const {rateLimit} = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
	limit: 100, 
})


const securityLayer = [cors(), helmet() , hpp(), limiter]

module.exports = securityLayer