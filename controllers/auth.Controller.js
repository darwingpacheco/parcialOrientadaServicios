import { getUsuario } from "../models/auth.mode.js"
import { generateToken } from "../server/token.service.js";

export const login = async(req,res) => {
    try{
        let { username, password } = req.query;
    let data = await getUsuario(username, password);

    if(!data){
        throw new Error("LOS DATOS SON INCORRECTOS");
    }

    res.status(200).json({
        success: true,
        token: generateToken(data),
        msn : 'BIENVENIDO, LOGUEO EXITOSO!!'
    });

    }catch(error){
        console.log(error);

        res.status(404).json({
            success: false,
            data: 'Servicio no disponible!',
            token: '',
            msn: error.message        
        })

        res.status(401).json({
            success: false,
            data: 'Servicio no disponible!',
            token: '',
            msn: error.message
        })
    }
}