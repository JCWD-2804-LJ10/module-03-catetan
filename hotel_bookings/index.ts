import express, { Application } from 'express';

const app: Application = express();
const PORT =  8000;


app.use(express.json());






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
