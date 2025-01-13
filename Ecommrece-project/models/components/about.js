const Joi = require("Joi");
const {default:mongoose, Schema} = require('mongoose');

const aboutSchema = Schema({
    title: String,
    text:  String,
    image: String,

}, { timestamps: true });


const aboutValidate = (about) => {
    const schema = new Joi.object({
        title: Joi.string(),
        text: Joi.string(),
        image: Joi.string(),
    })
    return schema.validate(about);
};

const About = mongoose.model("About", aboutSchema);
module.exports = {About,aboutValidate};