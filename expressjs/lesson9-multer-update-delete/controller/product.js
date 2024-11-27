import { Product, productValidate } from "../models/product.js";
import { deleteManyOldImage, deleteSingleOldImage } from "../utils/deleteOldImage.js";

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

        let fileObj = req.files;
        let filesObjLength = Object.keys(fileObj).length;
        if (filesObjLength === 0) {

            const product = new Product(req.body);
            const result = await product.save();
            res.status(201).send(result);

        } else {
            const product = new Product(req.body);
            const uploadFiles = [];
            req.files.images.map(async item => {
                uploadFiles.push(item.path)
            })
            product.images = uploadFiles;
            product.coverImg = req.files.coverImg[0].path;
            const result = await product.save();
            res.status(201).send(result);
        }


    }

}


export const product_edit = async (req, res) => {
    const { error } = productValidate(req.body);
    const paramsId = req.params.id;
    if (error) {
        res.status(400).send(error.message);
    } else {
        let product;
        product = await Product.findById(paramsId);
        if (!product) {
            return res.status(404).send("No Product");
        } else {
            let fileObj = req.files;
            let filesObjLength = Object.keys(fileObj).length;
            if (filesObjLength === 0) {
                product = await Product.findByIdAndUpdate(paramsId, {
                    ...req.body
                });
                await product.save();
                res.status(200).json(product);
            } else {
                product = await Product.findByIdAndUpdate(paramsId, {
                    ...req.body
                });
                deleteSingleOldImage(product.coverImg);
                deleteManyOldImage(product.images);
                const uploadFiles = [];
                req.files.images.map(async item => {
                    uploadFiles.push(item.path)
                })
                product.images = uploadFiles;
                product.coverImg = req.files.coverImg[0].path;
                const result = await product.save();
                res.status(201).send(result);

            }
        }
    }
}


export const product_delete = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    deleteSingleOldImage(product.coverImg);
    deleteManyOldImage(product.images);
    res.status(200).send(product);
}






export const product_all_delete = async (req, res) => {
    const product = await Product.deleteMany();
    
    res.status(200).send(product);
}


