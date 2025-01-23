import db from "../db/index.js";

export async function registerUser(userData) {
  try {
    const newUser = await db.user.create({
      data: userData,
    });
    return newUser;
  } catch (error) {
    console.error("ERROR REGISTERING USER");
    throw error;
  }
}

export async function getUserByEmail(email) {
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error("ERROR FETCHING USER BY EMAIL");
    throw error;
  }
}

export async function getUserByUserName(username) {
  try {
    const user = await db.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
        username: true,
        password: true,
      },
    });
    return user;
  } catch (error) {
    console.error("ERROR FETCHING USER BY USERNAME");
    throw error;
  }
}
