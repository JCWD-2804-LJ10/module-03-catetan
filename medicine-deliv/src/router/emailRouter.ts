import { Router} from "express"
import {createEmail} from "../controller/emailControl.ts"

const router = Router()

router.post("/send-email", createEmail);

export default router;