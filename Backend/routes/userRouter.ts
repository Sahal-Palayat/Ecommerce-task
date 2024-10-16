import express from 'express'
import { getProducts } from '../controller/userController'

export const userRouter = express.Router()


userRouter.get('/products',getProducts) 