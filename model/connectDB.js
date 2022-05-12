const { messages } = require('babel-core');
const mongoose=require('mongoose')
const {Schema}=mongoose;

const StoreSchema=new Schema({
    name:{
        type:String,
        required:[true,"Product name must be provided"],
    },
    price:{
        type:Number,
        required:[true,"price of the product must be provided"],
    },
    company:{
        type:String,
        enum:{
        values:['ikea','caressa','marcos','liddy'],
        message:"Please enter a company name like ikea, caressa, marcosm liddy"
        }
    },
    rating:{
        type:Number,
        default:0.0
    },
    featured:{
        type:Boolean,
        default:false
    },
    postedOn:{
        type:Date,
        default:Date.now()
    }

})
module.exports=mongoose.model("StoreApi",StoreSchema)