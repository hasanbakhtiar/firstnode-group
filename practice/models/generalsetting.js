import Joi from "joi";
import mongoose, { Schema } from "mongoose";

const generalSettingSchema = Schema({
    title:String,
    favicon:String,
    logo:String,
    description:String,
    keyword:[String],
    phone:[String],
    email:[String],
    address:String,
    mapUrl:String,
    instagramUrl:String,
    facebookUrl:String,
    twitterUrl:String,

},{ timestamps: true });


export const generalSettingValidate = (generalSetting)=>{
    const schema = new Joi.object({
        title:Joi.string(),
        favicon:Joi.string(),
        logo:Joi.string(),
        description:Joi.string(),
        keyword:Joi.array(Joi.string()),
        phone:Joi.array(Joi.string()),
        email:Joi.array(Joi.string()),
        address:Joi.string(),
        mapUrl:Joi.string(),
        instagramUrl:Joi.string(),
        facebookUrl:Joi.string(),
        twitterUrl:Joi.string(),
    })
    return schema.validate(generalSetting);
};

export const GeneralSetting = mongoose.model("GeneralSetting",generalSettingSchema);