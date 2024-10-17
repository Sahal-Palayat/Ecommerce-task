const  express =require('express') 
import { getArticles, getBanner, getCategories, getDesigners, getProducts, getProductsByCategory } from '../controller/userController'

export const userRouter = express.Router()


userRouter.get('/products',getProducts)   
userRouter.get('/products/category/:categoryId', getProductsByCategory);
userRouter.get('/categories',getCategories)  
userRouter.get('/designers',getDesigners)
userRouter.get('/articles',getArticles)
userRouter.get('/banner',getBanner)

