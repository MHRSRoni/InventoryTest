const { productReadController, productSingleReadController, productCreateController, productUpdateController, productDeleteController } = require('../controllers/productController')

const productRouter = require('express').Router()


productRouter.get('/', productReadController)
productRouter.post('/', productCreateController)
productRouter.get('/:productId', productSingleReadController)
productRouter.patch('/:productId', productUpdateController)
productRouter.delete('/:productId', productDeleteController)

module.exports = productRouter