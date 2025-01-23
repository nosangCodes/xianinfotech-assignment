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
