import status from "http-status";
import { userService } from "../services/index.js";

export async function userList(req, res) {
  try {
    const page = req.query?.page;
    const limit = req.query?.limit;
    const users = await userService.userList(page, limit);
    return res.json(users);
  } catch (error) {
    console.error("ERROR FETCHING USER LIST", error);
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
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
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
}

export async function updateUser(req, res) {
  try {
    const userId = req.params?.userId;
    const email = req.body.email;
    const phone = req.body.phone;
    if (!userId) {
      return res.status(status.BAD_REQUEST).json({
        error: "missing params",
      });
    }

    const user = await userService.userById(userId);
    if (!user)
      return res.status(status.NOT_FOUND).json({
        error: "user not found",
      });

    const mailUser = await userService.userByEmail(email);
    const phoneUser = await userService.userByPhone(phone);
    if (mailUser?.id && mailUser.id !== userId) {
      return res
        .status(status.BAD_REQUEST)
        .json({ error: "User with this email already exists" });
    }
    if (phoneUser?.id && phoneUser.id !== userId) {
      return res
        .status(status.BAD_REQUEST)
        .json({ error: "User with this contact already exists" });
    }

    await userService.updateUser(userId, req.body);
    return res.json({
      message: "user updated successfully",
    });
  } catch (error) {
    console.error("controller:ERROR UPDATING USER", error);
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      error,
    });
  }
}

export async function searchByName(req, res) {
  try {
    const search = req.query?.search;
    const page = req.query?.page;
    const limit = req.query?.limit;
    if (!search) {
      return res.status(status.BAD_REQUEST).json({
        error: "missing queries",
      });
    }

    const users = await userService.searchByName(page, limit, search);
    console.log("🚀 ~ searchByName ~ users:", users);
    return res.json(users);
  } catch (error) {
    console.error("ERROR SEARCHING USER", error);
    return res.status(status.INTERNAL_SERVER_ERROR).json({ error });
  }
}
