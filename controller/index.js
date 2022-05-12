const productDB=require('../model/connectDB')

const getAllProducts=async (req,res)=>{

        const {name,feature,company,sort,fields,limit,page}=req.query
        const queries={}
        if(name!==undefined)
        {
            queries.name={$regex:name,$options:'i'};
        }
        
        if(feature!==undefined)
        {
            queries.feature=feature==true?true:false;
        }
        
        if(company!==undefined)
        {
            queries.company=company;
        }
        let products=productDB.find(queries)
        if(sort)
        {
            const sortOpt=sort.split(',').join(' ')
            products.sort(sortOpt);
        }
        products.limit(Number(limit) || 10)
        if(fields)
        {
            const fieldsName=fields.split(',').join(' ')
            products.select(fieldsName)
        }
        const productsGet=await products
        res.status(200).json({data:productsGet,nbHits:productsGet.length})

}

const getProductsStatic=(req,res)=>{
    res.status(200).json({msg:"getProductsStatic"})
}

const addProduct=(req,res)=>{
    try{
        productDB.create(req.body)
    }catch(e){
        throw e;
    }
    res.status(200).json({msg:"data successfully added into db"});

}

module.exports={getAllProducts,getProductsStatic,addProduct}