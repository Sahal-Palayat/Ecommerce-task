import { model, Schema } from "mongoose";


const categorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }, 
    imageUrl: { type: String, required: true }     
});
export const categoryModel = model('category',categorySchema)