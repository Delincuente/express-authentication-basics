import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is require"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is require"],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        require: [true, "Password is require"],
        minLength: [6, "Password must be at least 6 characters"]
    }
}, { timestamps: true });

export default mongoose.model("User", userModel);