import { Schema,model } from "mongoose";


const productSchema = new Schema({
    name:String,
    description:String,
    price:Number,
    image:String
},
{
    versionKey:false
})

export const productModel = model("products",productSchema)