import { Router } from "express";
import authRouter from "./auth.routes.js";
import routeProducto from "./producto.routes.js";

const route = Router();

const generalRoutes=[
    {path:'/producto', route:routeProducto},
    {path:'/auth', route:authRouter}
]

generalRoutes.forEach(router=>{
    route.use(router.path,router.route)
})

route.use((req, res, next) => {
    res.status(404).json({ success: false, message: "La ruta solicitada no existe, solo producto y auth" });
});

export default route;