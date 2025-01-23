import { Router } from "express";
import { userController } from "../controllers/index.js";
import { verifyBearerToken } from "../middlewares/verify-beater-token.js";
const router = Router();

router.get("/", verifyBearerToken, userController.userList);

export default router;
