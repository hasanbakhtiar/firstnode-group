import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const serviceSchema = Schema({
    row:Number,
    title: String,
    text:  String,
    image: String,

}, { timestamps: true });


export const serviceValidate = (service) => {
    const schema = new Joi.object({
        row:Joi.number(),
        title: Joi.string(),
        text: Joi.string(),
        image: Joi.string(),
    })
    return schema.validate(service);
};

export const Service = mongoose.model("Service", serviceSchema);