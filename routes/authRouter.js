import { Router } from "express";

import { login, logout, register } from "../controllers/authController.js";
import { validateLoginInput, validateRegisterInput } from "../middleware/validationMiddleware.js";
import rateLimiter from "express-rate-limit"

const apiLimiter = rateLimiter({
    windowMs: 1000 * 15 * 60,
    max: 15,
    message: {
        msg: "IP rate limit exceeded, retry in 15 minutes."
    }
})

const router = Router();


router.post("/register", apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validateLoginInput, login);
router.get("/logout", logout);


export default router;