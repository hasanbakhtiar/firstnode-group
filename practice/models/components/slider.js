import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const sliderSchema = Schema({
    row:Number,
    title: String,
    text:  String,
    image: String,
    btnUrl:String

}, { timestamps: true });


export const sliderValidate = (slider) => {
    const schema = new Joi.object({
        row:Joi.number(),
        title: Joi.string(),
        text: Joi.string(),
        image: Joi.string(),
        btnUrl: Joi.string(),
    })
    return schema.validate(slider);
};

export const Slider = mongoose.model("Slider", sliderSchema);