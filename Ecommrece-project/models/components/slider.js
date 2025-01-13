const Joi = require("Joi");
const {default:mongoose, Schema} = require('mongoose');

const sliderSchema = Schema({
    row:Number,
    title: String,
    text:  String,
    image: String,
    btnUrl:String

}, { timestamps: true });


const sliderValidate = (slider) => {
    const schema = new Joi.object({
        row:Joi.number(),
        title: Joi.string(),
        text: Joi.string(),
        image: Joi.string(),
        btnUrl: Joi.string(),
    })
    return schema.validate(slider);
};

const Slider = mongoose.model("Slider", sliderSchema);
module.exports = {Slider,sliderValidate};