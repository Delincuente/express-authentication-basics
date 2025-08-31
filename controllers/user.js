import { createError, generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export async function createUser(req, res, next) {
    try {
        const { name, email, password } = req.body;
        const userExist = await User.findOne({ email: email }).select("_id");
        if (userExist) next(createError("User already exist", 409));
        const saltRound = 10;
        const passHash = await bcrypt.hash(password, saltRound);
        const user = new User.create({ name: name, email: email, password: passHash });
        res.status(201).json({
            success: true,
            message: "User created",
            data: { token: generateToken(user._id) }
        })
    } catch (error) {
        next(error);
    }
}

export async function getUsers(req, res, next) {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: "List of users",
            data: users
        })
    } catch (error) {
        next(error);
    }
}

export async function getUser(req, res, next) {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: "User details",
            data: user
        })
    } catch (error) {
        next(error);
    }
}

export async function updateUser(req, res, next) {
    try {
        const { name, email } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { name: name, email: email }, { new: true });
        if (!user) return next(createError("User not found", 404));
        res.status(200).json({
            success: true,
            message: "User updated",
            data: user
        })
    } catch (error) {
        next(error);
    }
}

export async function deleteUser(req, res, next) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return next(createError("User not found", 404));
        res.status(200).json({
            success: true,
            message: "User deleted",
            data: user
        })
    } catch (error) {
        next(error);
    }
}