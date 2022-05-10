const errorMiddleware=async(err,req,res,next)=>{
console.log(err);
return res.status(500).send("Something went wrong on the server")
}

module.exports=errorMiddleware