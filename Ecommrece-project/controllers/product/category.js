const { Category, categoryValidate } = require("../../models/product/category");

exports.categoryList = async (req, res) => {
    const category = await Category.find();
    res.status(200).json(category);
}

exports.categoryListById = async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
}

exports.categoryAdd = async (req, res) => {
    const { error } = categoryValidate(req.body);
    if (error) {
        res.status(400).send(error.messages);
    } else {
        const category = new Category(req.body);
        const result = await category.save();
        res.status(200).json(result);
    }
}

exports.categoryEdit = async(req,res)=>{
    const {error}  = categoryValidate(req.body);
    if (error) {
        res.status(400).send(error.messages);
    }else{
        const category = await Category.findByIdAndUpdate(req.params.id, { ...req.body });
        await category.save();
        res.status(200).json(category);
    }
}

exports.categoryDel = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
        return res.status(404).send("There is no such data.")
    } else {
        res.status(200).json(category);
    }
}