import { Product, productValidate } from "../models/product.js";

export const product_list = async (req, res) => {
    const product = await Product.find().populate("category", "title -_id");
    res.status(200).send(product);
}


export const single_product = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
}


export const product_add = async (req, res) => {

    const { error } = productValidate(req.body);
    if (error) {
        res.status(400).send(error.message);
    } else {
        
        const product = new Product(req.body);
        product.coverImg = req.file.path;
        const result = await product.save();
        res.status(201).send(result);
    }

}


export const product_edit = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, {
        row: req.body.row,
        title: req.body.title,
        price: req.body.price,
        desc: req.body.desc
    })
    res.status(200).send(product);
}


export const product_delete = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send(product);
}






export const product_all_delete = async (req, res) => {
    const product = await Product.deleteMany();
    res.status(200).send(product);
}


