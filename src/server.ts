import express from "express";
import morgan from "morgan";
import cors from "cors";


class ServerBootstrap {
    
    public app: express.Application = express();
    private port : number = 8000;
    
    public listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}



