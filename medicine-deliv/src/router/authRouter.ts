import {Router} from "express";
import { login,register } from "../controller/authControl.ts";
import upload from "../middleware/uploadMiddleware.ts";
// import { validateUser } from "../middleware/validateUserMiddleware.ts";

const router = Router();

router.post('/login', login);

router.post('/register',upload.single("image"), register);

export default router;