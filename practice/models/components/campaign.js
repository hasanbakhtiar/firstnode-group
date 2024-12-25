import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const campaignSchema = Schema({
    row:Number,
    title: String,
    text:  String,
    image: String,

}, { timestamps: true });


export const campaignValidate = (campaign) => {
    const schema = new Joi.object({
        row:Joi.number(),
        title: Joi.string(),
        text: Joi.string(),
        image: Joi.string(),
    })
    return schema.validate(campaign);
};

export const Campaign = mongoose.model("Campaign", campaignSchema);