import Joi from "joi";
import {mongoose,Schema} from "mongoose";
import jwt from 'jsonwebtoken';


const userShema = Schema({
    fullname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    active:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

export const userValidate = (user)=>{
    const schema = new Joi.object({
        fullname:Joi.string().required(),
        email:Joi.string().min(8).max(50).required(),
        phone:Joi.string().min(8).max(13).required(),
        password:Joi.string().min(8).max(50).required(),
        role:Joi.string(),
        active:Joi.boolean(),
    })
    return schema.validate(user);
}



export const loginValidate=(user)=>{
    const schema = new Joi.object({
        email:Joi.string().min(8).max(50).required(),
        password:Joi.string().min(8).max(50).required()
    })
    return schema.validate(user);
}




userShema.methods.createAuthToken = function(){
    const decodedToken = jwt.sign({fullname:this.fullname, role:this.role},"jwtPrivateKey");
    return decodedToken;
}


export const User = mongoose.model("User", userShema);
