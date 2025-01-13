const { Product } = require("../../models/product/product")


exports.productList = async(req,res)=>{
    const product = await Product.find();
    res.status(200).send(product);
}