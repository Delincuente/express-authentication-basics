import { body } from "express-validator";

export const loginValidation = [
    body("name")
        .notEmpty().withMessage("Enter name."),
    body("email")
        .notEmpty().withMessage("Enter email.")
]