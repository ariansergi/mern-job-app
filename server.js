import "express-async-errors";
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from "morgan"
import { nanoid } from 'nanoid';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser";
import cloudinary from 'cloudinary';

//import middlewares
import errorHandleMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
// import routers
import jobRouter from './routes/jobRouter.js';
import authRouter from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js"
// public
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});
const __dirname = dirname(fileURLToPath(import.meta.url));


if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname, 'public')));
let jobs = [
    { id: nanoid(), company: 'apple', position: 'front-end' },
    { id: nanoid(), company: 'google', position: 'back-end' },
];
app.use(cookieParser());
app.use(express.json());

// application routes
app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);


app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public", "index.html"))
})


app.use("*", (req, res) => {
    res.status(404).json({ msg: "Route not found" });
})

app.use(errorHandleMiddleware)

const port = process.env.PORT || 5100;
try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} catch (error) {
    console.log(error);
    process.exit(1);
}
