import { body } from "express-validator";
export const validateUser =[
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').not().isEmpty().withMessage('Invalid password'),
]