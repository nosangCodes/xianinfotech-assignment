import { Router } from "express";
import { authController } from "../controllers/index.js";
import { verifyRefreshToken } from "../middlewares/verify-refresh-token.js";
const router = Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.login);
router.get("/refresh-token", verifyRefreshToken, authController.refreshToken);

export default router;
