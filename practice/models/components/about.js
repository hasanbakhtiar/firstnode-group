import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const aboutSchema = Schema({
    title: String,
    text:  String,
    image: String,

}, { timestamps: true });


export const aboutValidate = (about) => {
    const schema = new Joi.object({
        title: Joi.string(),
        text: Joi.string(),
        image: Joi.string(),
    })
    return schema.validate(about);
};

export const About = mongoose.model("About", aboutSchema);