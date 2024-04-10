import jwt from "jsonwebtoken"
import { env } from "../config/default.js"


export const verifyToken = (req,res,next) => {
    let token = req.headers["authorization"]
    if(!token){
        return res.status(401).json({
            success: false,
            msn: "autorization required"
        })
    }

    token = token.split(" ")
    if(token[0] !== 'Bearer'){
        return res.status(401).json({
            success: false,
            msn: "autorization required"
        })
    }

    jwt.verify(token[1], env.secret, (err, decode)=> {
        if(err){
            return res.status(401).json({
                success:false,
                msn: "authorization required",
                error: err
            })
        }
        next();
    })
}