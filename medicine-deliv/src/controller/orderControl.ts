import { Request, Response } from "express";
import * as orderService from "../services/orderService.ts";

export const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const newOrder = await orderService.createOrder(orderData);
    res.status(201).send({
      data: newOrder,
    });
  } catch (error: any) {
    res.status(400).send({
      error: error.message,
    });
  }
};