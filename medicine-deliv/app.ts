import express , { Application } from 'express'
import dotenv from 'dotenv'
import drugRouter from "./src/router/drugRouter.ts"
import authRouter from './src/router/authRouter.ts';
import transRouter from './src/router/transRouter.ts';
import orderRouter from './src/router/orderRouter.ts';
dotenv.config();
const app : Application = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use("/api" , drugRouter);
app.use("/api/buy", orderRouter);
app.use("/api/lgpage" , authRouter);
app.use("/api/pay", transRouter)
app.listen(PORT, () =>
    {
        console.log(`Server is running on port ${PORT}`);
    }
)