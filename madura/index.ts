import express, { Request, Response, Application } from "express";
import { maduraRouter } from "./src/routes/maduraRoute.ts";
import db from "./src/config/database.ts"
const PORT = 8000;
const app: Application = express();
app.use(express.json());

app.use("/madura" , maduraRouter)

db.getConnection((err, connection) => {
  if (err) {
    return console.log(err);
  }
  console.log("Connected to the database" , connection.threadId);
  })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  

