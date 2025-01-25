import db from "../db/index.js";

export async function userList(page = 1, limit = 10) {
  try {
    const users = await db.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
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
    const pages = Math.ceil(items / limit);
    return { users, page: page, limit: limit, items, pages };
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

export async function searchByName(search = "") {
  try {
    const res = await db.user.findMany({
      where: {
        userType: "CLIENT",
        OR: [
          {
            firstName: {
              contains: search,
              mode: "insensitive", // Case-insensitive search
            },
          },
          {
            lastName: {
              contains: search,
              mode: "insensitive", // Case-insensitive search
            },
          },
        ],
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        status: true,
      },
    });
    return res;
  } catch (error) {
    console.error("ERROR SEARCHING USER", error);
    throw error;
  }
}

export async function updateUserById(userId, updateBody) {
  try {
  } catch (error) {
    console.error("");
  }
}
