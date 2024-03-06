const products = require('../Models/productModel')

//getAllproduct
exports.getAllProductController = async (req,res)=>{
    try {
        const result = await products.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
}

//getAproduct

exports.getAProductController= async(req,res)=>{
    const {id}=req.params
    try {
        const result = await products.findOne({id})
        res.status(200).json(result)

    } catch (error) {
        res.status(401).json(error)
    }
}

