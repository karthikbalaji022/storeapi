require('dotenv').config()
const express=require('express')
const app=express()

const connect=require('./db/connect')
const storeData=require('./model/connectDB')

const route=require('./routes/index')

const errBoundary=require('./middleware/errorHandler')
const notfound=require('./middleware/notFound')

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200,"successfully loaded").json({msg:"Welcome Karthik"})
})
app.use('/api/v1/products',route)


app.use(errBoundary)
app.use(notfound)

const PORT=process.env.PORT || 9000;

const start=async ()=>{
try{
    await connect(process.env.MONGODB_URI)
    app.listen(PORT,()=>{
        console.log("the server is running");
    })
}catch(e){
    console.log("The was a problem in connecting the DB or the server");
}
}
start()
    