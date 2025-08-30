import { configDotenv } from "dotenv";
configDotenv({ quiet: true });
import express from "express";

import errorHandler, { notFound } from "./middlewares/errorHandler.js";
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import connectDB from "./config/db.js";
connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use((req, res, next) => {
    console.log(new Date(), req.method, req.url);
    next();
})

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});