import e from "express";
const router = e.Router();

import {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
} from "../controllers/user.js";
import { createUserValidation } from "../middlewares/userValidation.js"
import validate from "../middlewares/validate.js";

router.route('/')
    .get(getUsers)
    .post([createUserValidation, validate], createUser)

router.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser)

export default router;