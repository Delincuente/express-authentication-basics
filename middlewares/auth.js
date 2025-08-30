import { decodeToken, createError } from "../lib/utils";
import User from "../models/User.js";
export async function protect(req, res, next) {
    try {
        const token = "";
        const decode = decodeToken(toke);
        const user = await User.findById(decode.id).select('-password');
        if (!user) {
            return next(createError("Not authorized, token failed", 401));
        }
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
}