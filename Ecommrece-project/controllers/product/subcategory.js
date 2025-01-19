const {   SubCategory, subCategoryValidate } = require("../../models/product/subcategory");

exports.subcategoryList = async (req, res) => {
    const subcategory = await SubCategory.find().populate('category');
    res.status(200).json(subcategory);
}

exports.subcategoryListById = async (req, res) => {
    const subcategory = await SubCategory.findById(req.params.id);
    res.status(200).json(subcategory);
}

exports.subcategoryAdd = async (req, res) => {
    const { error } = subCategoryValidate(req.body);
    if (error) {
        res.status(400).send(error.messages);
    } else {
        const subcategory = new SubCategory(req.body);
        const result = await subcategory.save();
        res.status(200).json(result);
    }
}

exports.subcategoryEdit = async(req,res)=>{
    const {error}  = subCategoryValidate(req.body);
    if (error) {
        res.status(400).send(error.messages);
    }else{
        const subcategory = await SubCategory.findByIdAndUpdate(req.params.id, { ...req.body });
        await subcategory.save();
        res.status(200).json(subcategory);
    }
}

exports.subcategoryDel = async (req, res) => {
    const subcategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!subcategory) {
        return res.status(404).send("There is no such data.")
    } else {
        res.status(200).json(subcategory);
    }
}