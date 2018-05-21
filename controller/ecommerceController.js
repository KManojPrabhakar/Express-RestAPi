const mongoose = require('mongoose');
const shortid = require('shortid');
const responseGenerate = require('../libs/response-lib')
const checkLib = require('../libs/check-lib')
const logger = require('../libs/logger-lib')



const EcommerceModel = mongoose.model('Ecommerce');
const CartModel = mongoose.model('EcommerceCartSchema');



let createProduct = (req, res) => {
    let productCreateFunction = () => {
        return new Promise((resolve, reject) => {
            if (checkLib.isEmpty(req.body.title) || checkLib.isEmpty(req.body.description) || checkLib.isEmpty(req.body.subTitle) || checkLib.isEmpty(req.body.category)
                || checkLib.isEmpty(req.body.subCategory) || checkLib.isEmpty(req.body.imageUrl)) {

                console.log("403, forbidden request");
                let apiResponse = responseGenerate.generate(true, 'required parameters are missing in body', 403, null)
                reject(apiResponse)
            } else {

                var today = Date.now()
                let productID = shortid.generate()

                let newProduct = new EcommerceModel({

                    productID: productID,
                    title: req.body.title,
                    subTitle: req.body.subTitle,
                    description: req.body.description,
                    isAvialable: true,
                    category: req.body.category,
                    subCategory: req.body.subCategory,
                    imageUrl: req.body.imageUrl,
                    created: today,
                    lastModified: today
                }) // end new Ecommerce model

                let specifications = (req.body.specifications != undefined && req.body.specifications != null && req.body.specifications != '') ? req.body.specifications.split(',') : []
                newProduct.specifications = specifications

                newProduct.save((err, result) => {
                    if (err) {
                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = responseGenerate.generate(true, 'Error Occured.', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in Product creation', result)
                        resolve(result)
                    }
                }) // end new Product save
            }
        }) // end new Product promise
    } // end create Product function

    // making promise call.
    productCreateFunction()
        .then((result) => {
            let apiResponse = responseGenerate.generate(false, 'Product Created successfully', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}


let getAllProducts = (req, res) => {
    EcommerceModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Ecommerce Controller: getAllProducts', 10)
                let apiResponse = responseGenerate.generate(true, 'Failed To Find Product Details', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {
                logger.info('No Product Found', 'Product Controller: getAllProducts')
                let apiResponse = responseGenerate.generate(true, 'No Product Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = responseGenerate.generate(false, 'All Product Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all Products


let viewByproductId = (req, res) => {

    if (checkLib.isEmpty(req.params.productID)) {

        console.log('productID should be passed')
        let apiResponse = responseGenerate.generate(true, 'productID is missing', 403, null)
        res.send(apiResponse)
    } else {

        EcommerceModel.findOne({ 'productID': req.params.productID }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = responseGenerate.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = responseGenerate.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                logger.info("Product found successfully", "ProductController:ViewBlogById", 5)
                let apiResponse = responseGenerate.generate(false, 'Product Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}


let editProduct = (req, res) => {

    if (checkLib.isEmpty(req.params.productID)) {

        console.log('productID should be passed')
        let apiResponse = responseGenerate.generate(true, 'productID is missing', 403, null)
        res.send(apiResponse)
    } else {

        let options = req.body;
        console.log(options);
        EcommerceModel.update({ 'productID': req.params.productID }, options, { multi: true }).exec((err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = responseGenerate.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = responseGenerate.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Edited Successfully')
                let apiResponse = responseGenerate.generate(false, 'Product Edited Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}




let deleteProduct = (req, res) => {

    if (checkLib.isEmpty(req.params.productID)) {

        console.log('productID should be passed')
        let apiResponse = responseGenerate.generate(true, 'productID is missing', 403, null)
        res.send(apiResponse)
    } else {


        EcommerceModel.remove({ 'productID': req.params.productID }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = responseGenerate.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {

                console.log('Product Not Found.')
                let apiResponse = responseGenerate.generate(true, 'Product Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Product Deleted Successfully')
                let apiResponse = responseGenerate.generate(false, 'Product Deleted Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}

let addProductsToCart = (req, res) => {

    let addToCartCreation = () => {
        return new Promise((resolve, reject) => {

            if (checkLib.isEmpty(req.params.productID)) {

                console.log('productID should be passed')
                let apiResponse = responseGenerate.generate(true, 'productID is missing', 403, null)
                res.send(apiResponse)
            } else {

                EcommerceModel.findOne({ 'productID': req.params.productID }, (err, result) => {

                    if (err) {

                        console.log('Error Occured.')
                        logger.error(`Error Occured : ${err}`, 'Database', 10)
                        let apiResponse = responseGenerate.generate(true, 'Error Occured.', 500, null)
                        res.send(apiResponse)
                    } else if (checkLib.isEmpty(result)) {

                        console.log('Product Not Found.')
                        let apiResponse = responseGenerate.generate(true, 'Product Not Found', 404, null)
                        res.send(apiResponse)
                    } else {

                        console.log('Product Add to Cart Added  Successfully')
                        let apiResponse = responseGenerate.generate(false, 'Product Added Successfully.', 200, result)
                        var cartID = shortid.generate();
                        console.log("cart id",cartID)
                        console.log("product result",result)

                        let newProductsToCartApi = new CartModel({
                            cartID:cartID,
                            productID:result.productID,
                            title:result.title,
                            subTitle:result.subTitle,
                            category:result.category,
                            subCategory:result.subCategory,
                            description:result.description,
                            specifications:result.specifications,
                            imageUrl:result.imageUrl

                        });

                        newProductsToCartApi.save((err, result) => {
                            if (err) {
                                console.log('Error Occured.')
                                logger.error(`Error Occured : ${err}`, 'Database', 10)
                                let apiResponse = responseGenerate.generate(true, 'Error Occured.', 500, null)
                               reject(apiResponse)
                            } else {
                                console.log('Success in Product creation', result)
                                let apiResponse = responseGenerate.generate(false, 'Success in Product creation', 200, result)

                                resolve(result)

                            }
                        })




                    }
                })
            }
        })
    }

    // making promise call.
    addToCartCreation()
        .then((result) => {
            let apiResponse = responseGenerate.generate(false, 'Product Added to  Cart Successfully.', 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })


}

let getAllCarts = (req, res) => {
    CartModel.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Ecommerce Controller: getAllCarts', 10)
                let apiResponse = responseGenerate.generate(true, 'Failed To Find Cart Details', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {
                logger.info('No Cart Found', 'Cart Controller: getAllCarts')
                let apiResponse = responseGenerate.generate(true, 'No Cart Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = responseGenerate.generate(false, 'All Cart Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}

let deleteCartItem = (req, res) => {

    if (checkLib.isEmpty(req.params.cartID)) {

        console.log('cartID should be passed')
        let apiResponse = responseGenerate.generate(true, 'cartID is missing', 403, null)
        res.send(apiResponse)
    } else {


        CartModel.remove({ 'cartID': req.params.cartID }, (err, result) => {

            if (err) {

                console.log('Error Occured.')
                logger.error(`Error Occured : ${err}`, 'Database', 10)
                let apiResponse = responseGenerate.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (checkLib.isEmpty(result)) {

                console.log('cart Not Found.')
                let apiResponse = responseGenerate.generate(true, 'cart Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Cart Item Deleted Successfully')
                let apiResponse = responseGenerate.generate(false, 'Cart Item  Deleted Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}


module.exports = {
    createProduct: createProduct,
    getAllProducts: getAllProducts,
    viewByproductId: viewByproductId,
    editProduct: editProduct,
    deleteProduct: deleteProduct,
    addProductsToCart: addProductsToCart,
    getAllCarts: getAllCarts,
    deleteCartItem:deleteCartItem
}