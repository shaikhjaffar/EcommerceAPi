const express = require("express")
const route = express.Router()
const ProductController = require("../controllers/productControllers")


 //All Api EndPoint


route.get('/products',ProductController.getProduct) // for geeting All Product

route.post('/Addproducts',ProductController.AddProduct) // for Adding the Product

route.delete('/productDelet/:id',ProductController.DeletProduct)  // for deleting Product

route.post('/productUpdate/:id/update_quantity?',ProductController.updateProduct) // for updating  Product



module.exports = route
