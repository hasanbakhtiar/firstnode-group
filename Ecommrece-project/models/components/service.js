const Joi = require("Joi");
const {default:mongoose, Schema} = require('mongoose');

const serviceSchema = Schema({
    row:Number,
    title: String,
    text:  String,
    image: String,

}, { timestamps: true });


const serviceValidate = (service) => {
    const schema = new Joi.object({
        row:Joi.number(),
        title: Joi.string(),
        text: Joi.string(),
        image: Joi.string(),
    })
    return schema.validate(service);
};

const Service = mongoose.model("Service", serviceSchema);
module.exports = {Service,serviceValidate};