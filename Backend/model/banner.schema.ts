import { model, Schema } from "mongoose";


const bannerSchema = new Schema({
    title: { type: String, required: true },  
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    linkUrl: { type: String },  
    isActive: { type: Boolean, default: true }, 
    createdAt: { type: Date, default: Date.now } 
  });
export const bannerModel = model('banner',bannerSchema)