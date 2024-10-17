import { Request, Response } from "express"
import { productModel } from "../model/product.schema";
import { bannerModel } from "../model/banner.schema";
import { designersModel } from "../model/designers.schema";
import { articleModel } from "../model/articles.schema";
import { categoryModel } from "../model/category.schema";
// import { productModel } from /"model/product.schema"




export async function getProducts(req: Request, res: Response): Promise<void> {
    try {
        const products = await productModel.find()
        console.log(products);

        res.status(200).json(products)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}

export async function getBanner(req: Request, res: Response): Promise<void> {
    try {
        const banner = await bannerModel.find()
        res.status(200).json(banner)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}

export async function getDesigners(req: Request, res: Response): Promise<void> {
    try {
        const designer = await designersModel.find()


        res.status(200).json(designer)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}


export async function getArticles(req: Request, res: Response): Promise<void> {
    try {
        const article = await articleModel.find()


        res.status(200).json(article)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}

export async function getCategories(req: Request, res: Response): Promise<void> {
    try {
        const article = await categoryModel.find()


        res.status(200).json(article)
    } catch (err) {
        console.error(err)
        res.status(500).send('Server Error')
    }
}
export async function getProductsByCategory(req: Request, res: Response): Promise<void> {
    try {
        const { categoryId } = req.params;
        console.log(categoryId);
        const category = await categoryModel.findById(categoryId); 
        if (!category) {
             res.status(404).json({ message: 'Category not found' }); 
        }
        const categoryName = category.name; 

        const products = await productModel.find({ category: categoryName }); 
        console.log(products);
        if (!products.length) {
            res.status(404).json({ message: 'No products found for this category' });
        } else {
            res.status(200).json(products);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}
