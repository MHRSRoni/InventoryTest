const ProductModel = require("../models/productModel")
const { CustomError } = require("../utils/CustomError")

const productReader = async () => {
    try {
        const product = await ProductModel.find({})
        const totalItem = await ProductModel.countDocuments({})
        return {
            success : true,
            message : 'Product read Successfully',
            data : product,
            pagination : {
                totalItem,
            }
        }
    } catch (error) {
        throw new CustomError(500, 'Product read failed')
    }
}

const singleProductReader = async (productId) => {
    try {
        const product = await ProductModel.findById(productId)
        return {
            success : true,
            message : 'Product read Successfully',
            data : product
        }
    } catch (error) {
        throw new CustomError(500, 'Product read failed')
    }
}

const productCreator = async (data) => {
    try {
        const product = await ProductModel.create(data)
        return {
            success : true,
            message : 'Product created Successfully',
            data : product
        }
    } catch (error) {
        throw new CustomError(500, 'Product create failed')
    }
}

const productUpdater = async (productId, productData) => {
    try {
        const product = await ProductModel.findByIdAndUpdate(productId, productData, {new : true})
        return {
            success : true,
            message : 'Product updated Successfully',
            data : product
        }
    } catch (error) {
        throw new CustomError(500, 'Product update failed')
    }
}

const productDeleter = async (productId) => {
    try {
        const product = await ProductModel.findByIdAndDelete(productId)
        return {
            success : true,
            message : 'Product deleted Successfully',
            data : product
        }
    } catch (error) {
        console.log(error)
        throw new CustomError(500, 'Product delete failed')
    }
}



module.exports = {
    productCreator,
    productReader,
    singleProductReader,
    productUpdater,
    productDeleter
}