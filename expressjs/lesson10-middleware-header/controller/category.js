import { Category, categoryValidate } from "../models/category.js";
import { deleteSingleOldImage } from "../utils/deleteOldImage.js";
import jwt from 'jsonwebtoken';
export const category_list = async (req, res) => {
    const category = await Category.find();
    var token = jwt.sign({ name: 'Hasan',surname:"Bakhtiar",age:27,address:"Baku" },"PrivateKey");
    res.header("my-token",token).status(200).send(category);
}


export const category_add = async (req, res) => {

    const { error } = categoryValidate(req.body);
    let category = new Category(req.body);
    if (error) {
        res.status(400).send(error.message);
    } else {
        if (!req.file) {
            const result = await category.save();
            res.status(201).send(result);
        }else{
            category.icon = req.file.path
            const result = await category.save();
            res.status(201).send(result);
        }
    }

}

export const category_edit = async(req,res)=>{
    const { error } = categoryValidate(req.body);
    if (error) {
        res.status(400).send(error.message);
    }else{
        let category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).send("category not found");
        }else{
            if (!req.file) {
                const result = await category.save();
                category = await Category.findByIdAndUpdate(req.params.id,{...req.body});
                res.status(201).send(result);
            }else{
                category = await Category.findByIdAndUpdate(req.params.id,{...req.body});
                const oldImage = category.icon;
                deleteSingleOldImage(oldImage)
                category.icon = req.file.path
                const result = await category.save();
                res.status(201).send(result);
            }
        }
    }

}


export const category_delete = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);
    deleteSingleOldImage(category.icon);
    res.status(200).send(category);
}
