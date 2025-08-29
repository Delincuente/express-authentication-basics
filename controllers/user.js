import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export async function createUser(req, res, next) {
    try {
        const { name, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const passHash = bcrypt.hash(password, salt);
        const user = new User({ name: name, email: email, password: passHash });
        await User.save();
        res.status(201).json({
            success: true,
            message: "User created",
            data: user
        })
    } catch (error) {
        next(error);
    }
}

export async function loginUser(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if (!user || !(await bcrypt.compare(password, user.password))) {
            const error = new Error("Invalid email or password");
            error.status = 401;
            throw error;
        }
        res.status(200).json({
            success: true,
            message: "Login succesful",
            data: { token: generateToken(user._id) }
        });
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
        const user = await User.findByIdAndUpdate(req.params.id, { name: name, email: eamil }, { new: true });
        if (!user) {
            const error = new Error("User not found");
            error.status = 404;
            throw error;
        }
        res.status(200).json({
            success: true,
            message: "USer updated",
            data: user
        })
    } catch (error) {
        next(error);
    }
}

export async function deleteUser(req, res, next) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            const error = new Error("User not found");
            error.status = 404;
            throw error;
        }
        res.status(200).json({
            success: true,
            message: "USer deleted",
            data: user
        })
    } catch (error) {
        next(error);
    }
}