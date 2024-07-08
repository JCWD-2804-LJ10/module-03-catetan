import { Router } from "express";
import * as orderController from "../controller/orderControl.ts";
import { authenticateToken } from "../middleware/authMiddleware.ts";

const router = Router();

router.post("/order", authenticateToken, orderController.createOrder);

export default router;