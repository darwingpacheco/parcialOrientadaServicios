import { Router } from "express";
import ProductoController, { getProduct, getProductoUnico,  deleteProduct, deleteProductAll, postProducto, updateProducto} from "../controllers/producto.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { postProductoValidator, updateProductValidator  } from "../validators/producto.validator.js";

const routeProducto = Router();

routeProducto.get("/all", getProduct);
routeProducto.get("/:id", getProductoUnico);
routeProducto.delete("/all", deleteProductAll);
routeProducto.delete("/:id", deleteProduct);
routeProducto.post("/",validate(postProductoValidator), postProducto);
routeProducto.put("/:id", validate(updateProductValidator), updateProducto);

export default routeProducto;