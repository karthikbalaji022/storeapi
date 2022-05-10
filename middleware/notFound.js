const notFound=(req,res)=>{
return res.status(404).json({msg:"The file you are seeking is not found"})
}
module.exports=notFound