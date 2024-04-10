import { Router } from "express";
import { verifyToken } from "./token.middlewares.js";

const middleware = Router();

middleware.use("/producto", verifyToken);

export default middleware;