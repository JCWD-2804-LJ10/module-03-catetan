import express, { Request, Response } from "express";
import { CheckStockById } from "../middleware/stockById.ts";
import { getAllStock,getById,patchProduct,putStock,deleteProduct, postProduct } from "../controller/maduraController.ts";
import { IsFieldEmpty } from "../middleware/productValidate.ts";

const router = express.Router();


router.get("/stock", getAllStock);
router.get("/stock/:id", getById );
router.post("/stock",IsFieldEmpty ,postProduct);
router.put("/stock/:id", CheckStockById, putStock);
router.patch("/stock/:id", CheckStockById, patchProduct);
router.delete("/stock/:id", deleteProduct);


  export {router as maduraRouter}