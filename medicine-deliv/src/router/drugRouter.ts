import { Router } from "express";
import * as drugController from "../controller/drugControl.ts";
import { authenticateToken } from "../middleware/authMiddleware.ts";

const router = Router();

router.post('/drug' ,authenticateToken, drugController.createDrug);
router.get('/drugs',authenticateToken, drugController.getDrugs);
router.get('/drug/:id' ,authenticateToken, drugController.getDrugById);
router.put('/drug/:id',authenticateToken, drugController.updateDrug);
router.delete('/drug/:id',authenticateToken, drugController.deleteDrug);
export default router