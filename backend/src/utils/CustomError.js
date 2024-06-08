class CustomError extends Error {
    constructor(statusCode, message){
        super(message)
        this.code = statusCode
    }

}


const CustomErrorHandler = (err, req, res , next) => {
    res.status(err.status || 500).json({
        success : false,
        message : err.message || 'Something went wrong'
    })
}


module.exports = {
    CustomError,
    CustomErrorHandler
}