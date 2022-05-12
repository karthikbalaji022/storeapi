require('dotenv').config();

const connect=require('./db/connect');
const productDb=require('./model/connectDB');
const products=require('./products')
const start=async ()=>{
    try{


    await connect(process.env.MONGODB_URI)
    productDb.deleteMany({});
    productDb.create(products);
    console.log("data added")
    }catch(e){
        console.log(e);
    }
}

start()