
const mongoose = require("mongoose")
const Products = require("../models/products")


 const getProduct = (req,res) =>{
    Products.find({})
    .then(products=>{
        res.json({
            products
        })
    })
 }

 const AddProduct = (req,res) =>{
    const products = new Products({
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        quantity:req.body.quantity 
     })
     products.save()
     .then(products=>{
         res.json({
             products,
             message:"Product Added SuccessFully"
         })
     })
 }

const updateProduct = (req,res) =>{
    let id = req.params.id
    var query = require('url').parse(req.url,true).query;
    Products.findByIdAndUpdate(id,{
        quantity:query.quantity
    })
    .then(product =>{
        res.json({
             quantity : query.quantity,
            message:"updated Successfully"
        })
    })
}

 const DeletProduct = (req,res) =>{
    let id = req.params.id
    Products.findByIdAndDelete(id)
    .then(product =>{
        res.json({
            product,
            message:"Product Deleted SuccessFully"
        })
    })
 }


module.exports = {
    updateProduct,
    DeletProduct,
    AddProduct,
    getProduct
}
