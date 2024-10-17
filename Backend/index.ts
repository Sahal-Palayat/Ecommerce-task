const express = require('express');
const cors= require('cors')
const dotenv = require('dotenv');
dotenv.config()
import { mongooseConfig } from './config/db';
import { userRouter } from './routes/userRouter';

const app = express();
const port = 3000; 

mongooseConfig()
app.use(cors({origin: process.env.BASE_URL || ''}))
app.use(express.json());

app.use('/',userRouter)
     
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
