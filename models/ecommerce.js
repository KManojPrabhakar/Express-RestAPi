const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ecommerceSchmeas = new Schema(
    {
        productID : { 
            type:String,
            unique:true
        },
        title : {
            type: String,
            default:''
        },
        subTitle : {
            type: String,
            default:''
        },
        category: {
            type: String,
            default: ''
        },
         subCategory: {
            type: String,
            default: ''
        },
        description : {
            type: String,
            default: ''
        },
         created: {
            type: Date,
            default: Date.now
        }, 

        lastModified: {
            type: Date,
            default: Date.now
        },
        specifications:[],
        imageUrl : {
            type:String,
            default:''
        }
    }
)

let cartSchema  = new Schema(
    {
        cartID: {
            type: String,
            default:''
        },
         productID : { 
            type:String,
            default:''
        },
        title : {
            type: String,
            default:''
        },
        subTitle : {
            type: String,
            default:''
        },
        category: {
            type: String,
            default: ''
        },
         subCategory: {
            type: String,
            default: ''
        },
        description : {
            type: String,
            default: ''
        },
         created: {
            type: Date,
            default: Date.now
        }, 

        lastModified: {
            type: Date,
            default: Date.now
        },
        specifications:[],
        imageUrl : {
            type:String,
            default:''
        }

    }
    
)

mongoose.model('Ecommerce',ecommerceSchmeas);
mongoose.model('EcommerceCartSchema',cartSchema);