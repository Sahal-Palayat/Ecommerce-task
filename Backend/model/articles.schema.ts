import { model, Schema } from "mongoose";

const articleSchema = new Schema({
    heading: { type: String, required: true },  
    content: { type: String, required: true },  
    imageUrl: { type: String, required: true }, 
    linkUrl: { type: String },                   
    isActive: { type: Boolean, default: true }, 
    createdAt: { type: Date, default: Date.now } 
});

export const articleModel = model('article',articleSchema)