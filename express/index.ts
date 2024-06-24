import express, { Request, Response, Application } from "express";
import users from "./dumm/user.json" assert { type: "json" };
import {userRouter} from "./src/router/userRouter.ts";

const PORT = 8000;
const app: Application = express();
app.use(express.json());

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
