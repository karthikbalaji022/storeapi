const express=require('express');
const store=express.Router();
const {getAllProducts,getProductsStatic,addProduct}=require('../controller/index')


store.route('/getproducts').get(getAllProducts)
store.route('/add').post(addProduct)

module.exports=store;