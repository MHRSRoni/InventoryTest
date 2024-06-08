const { productCreator, singleProductReader, productReader, productUpdater, productDeleter } = require("../services/productServices")

const productCreateController = async (req, res, next) => {
    try {
        const data = req.body 
        const response = await productCreator(data)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

const productSingleReadController = async (req, res, next) => {
    try {
        const {productId} = req.params 
        const response = await singleProductReader(productId)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}


const productReadController = async (req, res, next) => {
    try {
        const {productId} = req.params 
        const response = await productReader(productId)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}


const productUpdateController = async (req, res, next) => {

    try {
        const {productId} = req.params 
        const productData = req.body
        const response = await productUpdater(productId, productData)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }
}

const productDeleteController = async (req, res, next) => {
    try {
        const {productId} = req.params 
        const response = await productDeleter(productId)
        res.status(200).json(response)
    } catch (error) {
        next(error)
    }

}


module.exports = {
    productCreateController,
    productReadController,
    productSingleReadController,
    productUpdateController,
    productDeleteController
}