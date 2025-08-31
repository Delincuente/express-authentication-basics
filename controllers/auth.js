import { generateToken, createError } from "../lib/utils.js";
import User from "../models/User.js";

export async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email }).select("password");
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return next(createError("Invalid email or password", 401));
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