import { body } from "express-validator";

export const createUserValidation = [
    body("name")
        .notEmpty().withMessage("Enter name.")
        .isLength({ min: 3 }).withMessage("Name must containt at least 3 character."),
    body("email")
        .notEmpty().withMessage("Enter email.")
        .isEmail().withMessage("Enter valid email."),
    body("password")
        .notEmpty().withMessage("Enter password")
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1
        }).withMessage("Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol.")
];