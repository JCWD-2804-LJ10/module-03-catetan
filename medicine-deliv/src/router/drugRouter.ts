import { Router } from "express";
import * as drugController from "../controller/drugControl.ts";

const router = Router();

router.post('/drug' , drugController.createDrug);
router.get('/drugs', drugController.getDrugs);
router.get('/drug/:id' , drugController.getDrugById);
router.put('/drug/:id', drugController.updateDrug);
router.delete('/drug/:id', drugController.deleteDrug);
export default router