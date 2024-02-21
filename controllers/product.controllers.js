import { Product } from "../models/product.model.js"
import {ApiResponse} from '../utils/ApiResponse.js'
import {ApiError} from '../utils/ApiError.js'
import asyncHandler from '../utils/asyncHandler.js'



// Create Product --Admin
const createProduct = asyncHandler( async(req,res)=>{

    const product = await Product.create(req.body)
    return res
    .status(200)
    .json( new ApiResponse(200, product , "Product is created"))

})

//    Get All Products
const getAllProducts = asyncHandler( async(req,res)=>{

    const products = await Product.find()
    return res
    .status(200)
    .json( new ApiResponse(200, products , "All Products is"))

})

// Update Product --Admin
const updateProduct = asyncHandler( async(req,res)=>{

    let product = await Product.findById(req.params.id)      // find product

if (!product) {                                       //when product not find
    throw new ApiError(500, "Products not Found")
}                                                            // when product is find

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new : true,                                                       
        runValidators : true,                                     
        useFindAndModify : false
    })

    return res
    .status(200)
    .json( new ApiResponse(200, product , "Product is updated Successfully"))

})


// Delete Product
const deleteProduct = asyncHandler( async(req,res)=>{

    let product = await Product.findById(req.params.id)

    if (!product) {
        throw new ApiError(500, "Product not found")
    }

    await Product.deleteOne({ _id: product._id });

    return res
    .status(200)
    .json( new ApiResponse(200, "Product is deleted Successfully"))

})





export {createProduct,getAllProducts,updateProduct,deleteProduct}