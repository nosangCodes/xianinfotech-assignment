import status from "http-status";
import { userService } from "../services/index.js";

export async function userList(req, res) {
  try {
    const users = await userService.userList();
    return res.json(users);
  } catch (error) {
    console.error("ERROR FETCHING USER LIST", error);
    return res.status(status.INTERNAL_SERVER_ERROR, error);
  }
}

export async function userById(req, res) {
  try {
    const userId = req.params?.userId;
    if (!userId) {
      return res.status(status.BAD_REQUEST).json({
        error: "missing params",
      });
    }

    const user = await userService.userById(userId);
    return res.json(user);
  } catch (error) {
    console.error("ERROR FETCHING USER LIST", error);
    return res.status(status.INTERNAL_SERVER_ERROR, error);
  }
}
