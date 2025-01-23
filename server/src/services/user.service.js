import db from "../db/index.js";

export async function userList() {
  const PAGE = 1;
  const LIMIT = 10;

  try {
    const users = await db.user.findMany({
      skip: (PAGE - 1) * LIMIT,
      take: LIMIT,
      where: {
        userType: "CLIENT",
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        status: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    const items = await db.user.count();
    const pages = Math.ceil(items / LIMIT);
    return { users, page: PAGE, limit: LIMIT, items, pages };
  } catch (error) {
    console.error("ERROR FETCHING USERS LIST");
    throw error;
  }
}

export async function userById(userId) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        phone: true,
        email: true,
        state: true,
      },
    });
    return user;
  } catch (error) {
    console.error("ERROR FETCHING USERS LIST");
    throw error;
  }
}

export async function updateUser(userId, updateBody) {
  try {
    const res = await db.user.update({
      where: {
        id: userId,
      },
      data: updateBody,
    });
    return res;
  } catch (error) {
    console.error("ERROR UPDATING USER", error);
    throw error;
  }
}
