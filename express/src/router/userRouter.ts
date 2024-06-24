import express, { Request, Response } from "express";
import users from "../../dumm/user.json" assert { type: "json" };

const router = express.Router();

router.get("/users", (req: Request, res: Response) => {
  return res.send(users);
});

router.get("/users/:id", (request: Request, response: Response) => { // Added leading slash
  const userId = parseInt(request.params.id);
  const user = users.data.find((user) => user.id === userId);
  if (user) {
    response.send(user);
  } else {
    response.status(404).send("User not found");
  }
});

router.post("/users", (req: Request, res: Response) => {
  const newUser = { ...req.body, id: 100 + users.data.length + 1 };
  users.data.push(newUser);
  return res.status(201).send(newUser);
});

router.put("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedUser = req.body;
  const index = users.data.findIndex((user) => user.id === parseInt(id));
  if (index !== -1) {
    users.data[index] = { ...users.data[index], ...updatedUser };
    return res.status(201).send(users.data[index]);
  }
  return res.status(404).send("User not found");
});

router.patch("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedUser = req.body;
  const index = users.data.findIndex((user) => user.id === parseInt(id));
  if (index !== -1) {
    users.data[index] = { ...users.data[index], ...updatedUser };
    return res.status(201).send(users.data[index]);
  }
  return res.status(404).send("User not found");
});

router.delete("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const index = users.data.findIndex((user) => user.id === parseInt(id));
  if (index !== -1) {
    const [deletedUser] = users.data.splice(index, 1);
    return res.status(201).send(deletedUser);
  }
  return res.status(404).send("User not found");
});

export {router as userRouter}