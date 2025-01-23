import { authService } from "../services/index.js";
import status from "http-status";
import { hashPassword } from "../utils/password-helper.js";
import generateUniqueUsername from "../utils/generate-username.js";
import { generateRefreshToken, generateToken } from "../utils/token-helpers.js";

export async function registerUser(req, res) {
  try {
    const { email } = req.body;
    console.log("🚀 ~ registerUser ~ req.body:", req.body);
    const userExists = await authService.getUserByEmail(email);
    if (userExists) {
      return res.status(status.BAD_REQUEST).json({
        error: "user with this email already exists",
      });
    }
    const hashedPassword = await hashPassword(req.body.password);
    const username = generateUniqueUsername(
      req.body.firstName + " " + req.body.lastName
    );
    const newUser = await authService.registerUser({
      ...req.body,
      username,
      password: hashedPassword,
    });
    if (newUser?.id) {
      const accessToken = generateToken(newUser.id);
      const refreshToken = generateRefreshToken(newUser.id);
      return res.json({
        message: "user created successfully",
        data: {
          accessToken,
          refreshToken,
        },
      });
    }

    throw new Error("Failed to create user");
  } catch (error) {
    console.error("ERROR RESGISTERING USER", error);
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
}
