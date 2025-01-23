import { Router } from "express";
import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";

const router = Router();

const routes = [
  {
    path: "/auth",
    routes: authRoutes,
  },
  {
    path: "/user",
    routes: userRoutes,
  },
];

routes.map((route) => {
  router.use(route.path, route.routes);
});

export default router;
