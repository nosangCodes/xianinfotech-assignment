import { Router } from "express";
import { userController } from "../controllers/index.js";
import { verifyBearerToken } from "../middlewares/verify-beater-token.js";
const router = Router();

router.get("/", verifyBearerToken, userController.userList);
router.get("/search", verifyBearerToken, userController.searchByName);
router.get("/:userId", verifyBearerToken, userController.userById);
router.patch("/:userId", verifyBearerToken, userController.updateUser);

export default router;
