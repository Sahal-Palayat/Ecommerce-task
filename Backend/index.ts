
import express, { Request, Response } from 'express';
import cors from 'cors'
import { userRouter } from './routes/userRouter';

const app = express();
const port = 3000; 

app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.json());

app.use('/',userRouter)
     
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
