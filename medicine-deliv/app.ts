import express , { Application } from 'express'
import dotenv from 'dotenv'
import drugRouter from "./src/router/drugRouter.ts"
dotenv.config();
const app : Application = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use("/api" , drugRouter);
app.use("/api" , drugRouter);
app.listen(PORT, () =>
    {
        console.log(`Server is running on port ${PORT}`);
    }
)