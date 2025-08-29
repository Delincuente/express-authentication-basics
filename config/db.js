import mongoose from "mongoose";

export default async function () {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected...');
    } catch (error) {
        console.log("Failed to connect database.:", error.message);
        process.exit(1);
    }
}