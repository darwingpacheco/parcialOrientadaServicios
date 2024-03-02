import { Router } from "express";

const routeProducto = Router();

routeProducto.get("/", (req,res) =>{
    res.status(200).json({
        success: true
    })
})

export default routeProducto;