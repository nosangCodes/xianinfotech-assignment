import { Router } from "express";
import authRoutes from "./auth.routes.js";

const router = Router();

const routes = [
  {
    path: "/auth",
    routes: authRoutes,
  },
];

routes.map((route) => {
  router.use(route.path, route.routes);
});

export default router;
