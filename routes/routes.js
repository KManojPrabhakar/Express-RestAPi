const express = require('express');
const router = express.Router();
const ecommerceController = require('../controller/ecommerceController')
const appConfig = require('../config/app-config')
const auth = require("./../middlewares/auth")


setRouter = (app) => {
	let baseUrl = appConfig.apiVersion + '/ecommerce';

	app.post(baseUrl + '/create',auth.isAuthenticated, ecommerceController.createProduct);
    /**
	 * @api {post} /api/v1/ecommerce/create Create Product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} title title of the Product passed as a body parameter
     * @apiParam {String} subTitle subTitle of the Product passed as a body parameter
	 * @apiParam {String} description description of the Product passed as a body parameter
	 * @apiParam {String} category category of the Product passed as a body parameter
	 * @apiParam {String} subCategory subCategory of the Product passed as a body parameter
     * @apiParam {String} imageUrl imageUrl of the Product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Created successfully",
	    "status": 200,
	    "data": [
						{
						productID: "string",
						title: "string",
						subTitle: "string",
						description: "string",
						imageUrl: "string",
						isAvailable: boolean,
						category: "string",
						subCategory: "string",
						specifications: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + '/all',auth.isAuthenticated, ecommerceController.getAllProducts)

    /**
	 * @api {get} /api/v1/ecommerce/all Get all Products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Products Details Found",
	    "status": 200,
	    "data": [
					{
						productID: "string",
						title: "string",
						subTitle: "string",
						description: "string",
						isAvailable: boolean,
						category: "string",
						subCategory: "string",
						specifications: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Products Details",
	    "status": 500,
	    "data": null
	   }
	 */


	app.get(baseUrl + '/view/:productID',auth.isAuthenticated, ecommerceController.viewByproductId);


    /**
	 * @api {get} /api/v1/ecommerce/view/:productID Get a single Product
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productID The productID should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Found Successfully.",
	    "status": 200,
	    "data": {
	    			
					_id: "string",
					__v: number
					productID: "string",
					title: "string",
					subTitle: "string",
					description: "string",
					isAvailable: boolean,
					category: "string",
					subCategory: "string",
					specifications: object(type = array),
					created: "date",
					lastModified: "date"
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

	app.put(baseUrl + '/:productID/edit',auth.isAuthenticated, ecommerceController.editProduct);

	/**
  * @api {put} /api/v1/ecommerce/:productID/edit Edit Product by productID
  * @apiVersion 0.0.1
  * @apiGroup edit
  *
  * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
  * @apiParam {String} productID productID of the Product passed as the URL parameter
  *
  *  @apiSuccessExample {json} Success-Response:
  *  {
	 "error": false,
	 "message": "Product Edited Successfully.",
	 "status": 200,
	 "data": [
				 {
					 productID: "string",
					 title: "string",
					 subTitle: "string",
					 description: "string",
					 isAvailable: boolean,
					 category: "string",
					 subCategory: "string",
					 specifications: object(type = array),
					 created: "date",
					 lastModified: "date"
				 }
			 ]
		 }
	 }
 }
   @apiErrorExample {json} Error-Response:
  *
  * {
	 "error": true,
	 "message": "Error Occured.,
	 "status": 500,
	 "data": null
	}
  */

	app.post(baseUrl + '/:productID/delete',auth.isAuthenticated, ecommerceController.deleteProduct);

	/**
	 * @api {post} /api/v1/ecommerce/:productID/delete Delete Product by productID
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productID productID of the Product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + '/cart/:productID',auth.isAuthenticated, ecommerceController.addProductsToCart);
	 /**
	 * @api {get} /api/v1/ecommerce/cart/:productID Add  Product To Cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productID The productID should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Added to  Cart Successfully.",
	    "status": 200,
	    "data": {
	    			
					_id: "string",
					__v: number,
					cartID:"string",
					productID: "string",
					title: "string",
					subTitle: "string",
					description: "string",
					isAvailable: boolean,
					category: "string",
					subCategory: "string",
					specifications: object(type = array),
					created: "date",
					lastModified: "date"
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */


	app.get(baseUrl + '/cartDetails',auth.isAuthenticated, ecommerceController.getAllCarts);
	/**
	 * @api {get} /api/v1/ecommerce/cartDetails Get all Cart Items
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Cart Details Found",
	    "status": 200,
	    "data": [
					{
						cartID:"string",
						productID: "string",
						title: "string",
						subTitle: "string",
						description: "string",
						isAvailable: boolean,
						category: "string",
						subCategory: "string",
						specifications: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Cart Details",
	    "status": 500,
	    "data": null
	   }
	 */
	app.post(baseUrl + '/cart/:cartID/delete',auth.isAuthenticated, ecommerceController.deleteCartItem);
	/**
	 * @api {post} /api/v1/ecommerce/cart/:cartID/delete Delete Cart Item by cartID
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} cartID cartID of the cart Item passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Cart Item Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */





}

module.exports = {
	setRouter: setRouter
}