import { Request, Response, NextFunction } from "express";
import data from "../../data/madurastock.json" assert { type: "json" };


const IsFieldEmpty = (req: Request, res: Response, next: NextFunction) => {
  const {name,desc,price,stok} = req.body

  if (
    name === undefined ||
    name === "" ||
    desc === undefined ||
    desc === "" ||
    price === undefined ||
    price === null ||
    stok === undefined ||
    stok === null
  ){
    return res.status(400).send("the field cannot be empty");
  }
    next();
};

export { IsFieldEmpty };
