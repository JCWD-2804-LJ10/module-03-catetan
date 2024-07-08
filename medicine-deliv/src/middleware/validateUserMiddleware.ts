import { body } from "express-validator";
export const validateUser = [
  body("email").isEmail().withMessage("Enter a valid email address"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?]).{8,}/)
    .withMessage(
      "Password must at least 1 number, 1 character. 1 uppercase letter, and lowercase letter"
    ),
];
