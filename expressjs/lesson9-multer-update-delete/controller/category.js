import { Category, categoryValidate } from "../models/category.js";

export const category_list = async (req, res) => {
    const category = await Category.find();
    res.status(200).send(category);
}


export const category_add = async (req, res) => {
    const { error } = categoryValidate(req.body);
    if (error) {
        res.status(400).send(error.message);
    } else {
        const category = new Category(req.body);
        const result = await category.save();
        res.status(201).send(result);
    }

}