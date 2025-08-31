import e from "express";
const router = e.Router();

import { loginValidation } from "../middlewares/authValidation.js"
import validate from "../middlewares/validate.js";
import { login } from "../controllers/auth.js"

router.post('/', [loginValidation, validate], login)
export default router;