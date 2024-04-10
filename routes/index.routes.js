import { Router } from "express";
import authRouter from "./auth.routes.js";
import routeProducto from "./producto.routes.js";

const route = Router();

route.use(`/producto`, routeProducto)
route.use('/auth', authRouter)

export default route;