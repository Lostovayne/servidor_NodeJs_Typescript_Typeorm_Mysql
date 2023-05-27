import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

class ServerBootstrap {
    public app: express.Application = express()
    private port: number = 8000

    constructor() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.listen()
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}

new ServerBootstrap()
