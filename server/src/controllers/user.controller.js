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
