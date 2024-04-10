import express from "express";
import route  from "../routes/index.routes.js";
import pgService from "../server/pg.service.js";
import { env } from "./default.js";
import middleware from "../middlewares/index.middlewares.js"
export default class Server{

    constructor(){
        this.app = express();
        this.port = 8000;
    }

    connectionDB(){
        new pgService();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(middleware)
    }
    routes(){
        this.app.use(route)
    }

    runServer(){
        this.app.listen(this.port, ()=>{
            console.log(`Estoy en el puerto ${this.port}`);
        })
    }

    load(){
        this.connectionDB();
        this.middlewares();
        this.routes();
        this.runServer();
    }
}