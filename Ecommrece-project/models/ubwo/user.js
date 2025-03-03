const Joi = require("Joi");
const {default:mongoose, Schema} = require('mongoose');

const userSchema = Schema({
    nameId:String,
    name:String,
    surname:String,
    email:String,
    phone:String,
    password:String,
    role:{
        default:"user",
        enum:["admin","moderator","user"]
    }
    
},{ timestamps: true });


const userValidate = (user)=>{
    const schema = new Joi.object({
        nameId:Joi.string(),
        name:Joi.string(),
        surname:Joi.string(),
        email:Joi.email(),
        phone:Joi.string(),
        password:Joi.string(),
        role:Joi.string(),
    })
    return schema.validate(user);
};

const User = mongoose.model("User",userSchema);
module.exports = {User,userValidate};
