import e from "express";
const router = e.Router();

import { loginValidation } from "../middlewares/authValidation.js"
import validate from "../middlewares/validate.js";

router.post('/', [loginValidation, validate])
export default router;