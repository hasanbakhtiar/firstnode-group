const Joi = require("Joi");
const {default:mongoose, Schema} = require('mongoose');

const campaignSchema = Schema({
    row:Number,
    title: String,
    text:  String,
    image: String,

}, { timestamps: true });


const campaignValidate = (campaign) => {
    const schema = new Joi.object({
        row:Joi.number(),
        title: Joi.string(),
        text: Joi.string(),
        image: Joi.string(),
    })
    return schema.validate(campaign);
};

const Campaign = mongoose.model("Campaign", campaignSchema);
module.exports = {Campaign,campaignValidate}
