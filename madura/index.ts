import express, { Request, Response, Application } from "express";
import { maduraRouter } from "./src/routes/maduraRoute.ts";

const PORT = 8000;
const app: Application = express();
app.use(express.json());

app.use("/madura" , maduraRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
