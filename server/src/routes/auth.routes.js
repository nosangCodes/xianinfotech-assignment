import { Router } from "express";
import { authController } from "../controllers/index.js";
const router = Router();

router.post("/register-admin", authController.registerUser);

export default router;
