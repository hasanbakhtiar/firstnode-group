import Category from "../models/category.js";

export const category_list = async (req, res) => {
    const category = await Category.find();
    res.status(200).send(category);
}


export const category_add = async(req,res)=>{
    const category =  new Category(req.body);
    const result = await category.save();
    res.status(201).send(result);

}