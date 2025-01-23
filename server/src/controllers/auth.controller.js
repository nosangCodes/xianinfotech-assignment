import { authService } from "../services/index.js";
import status from "http-status";
import { hashPassword, verifyPassword } from "../utils/password-helper.js";
import generateUniqueUsername from "../utils/generate-username.js";
import { generateRefreshToken, generateToken } from "../utils/token-helpers.js";

export async function registerUser(req, res) {
  try {
    const { email } = req.body;
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

export async function login(req, res) {
  try {
    const userExists = await authService.getUserByUserName(req.body.username);
    if (!userExists) {
      return res.status(status.BAD_REQUEST).json({
        error: "Invalid credentials",
      });
    }
    const verifiedPassword = await verifyPassword(
      req.body.password,
      userExists.password
    );
    if (!verifiedPassword) {
      return res.status(status.BAD_REQUEST).json({
        error: "Invalid credentials",
      });
    }

    const accessToken = generateToken(userExists.id);
    const refreshToken = generateRefreshToken(userExists.id);
    return res.json({
      message: "loggedin successfully",
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    console.error("ERROR RESGISTERING USER", error);
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function refreshToken(req, res) {
  try {
    if (!req?.userId) {
      return res.status(status.BAD_REQUEST).json({
        error: "bad token",
      });
    }
    const accessToken = generateToken(req.userId);
    const refreshToken = generateRefreshToken(req.userId);
    return res.json({
      message: "token refreshed",
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    console.error("ERROR REFRESHING", error);
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
}
