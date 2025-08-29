import { validationResult } from "express-validator";

export default function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: errors
        });
    }
    next();
}