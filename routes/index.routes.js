import { Router } from "express";
import routeProducto from "./producto.routes.js";

const route = Router();

route.use(`/producto`, routeProducto)

export default route;