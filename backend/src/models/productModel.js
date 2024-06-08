const {Schema,model} = require('mongoose')
const productSchema = Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        // required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    discountPrice : {
        type : Number,
        required : true,
    },
}, {timeStamps : true})


const ProductModel = model('Product', productSchema)


module.exports = ProductModel