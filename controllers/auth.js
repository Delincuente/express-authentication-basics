import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";

export async function login(req, res, next) {
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