
import { model, Schema } from "mongoose";


const designersSchema = new Schema({
    name: { type: String, required: true },      
    imageUrl: { type: String, required: true },  
    category: { type: String, required: true },   
    likes: { type: Number, default: 0 },         
    isActive: { type: Boolean, default: true },   
    createdAt: { type: Date, default: Date.now }
  });
export const designersModel = model('designers',designersSchema)