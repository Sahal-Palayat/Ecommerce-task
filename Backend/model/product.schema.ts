    import { model, Schema } from "mongoose";


    const productSchema = new Schema({
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        quantity: { type: Number, required: true },
        imageUrl: { type: String, required: true }
    })

    export const productModel = model('product',productSchema)