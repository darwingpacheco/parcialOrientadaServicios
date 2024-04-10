import { Router } from "express";
import ProductoController from "../controllers/producto.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { postProductoValidator } from "../validators/producto.validator.js";

const routeProducto = Router();

routeProducto.get("/", ProductoController.getProduct)
routeProducto.get("/:id", ProductoController.getProductoUnico)
routeProducto.post("/", validate(postProductoValidator), ProductoController.postProducto)
routeProducto.put("/:id", ProductoController.updateProducto)

export default routeProducto;