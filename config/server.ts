import express, { Application } from 'express';
import userRoutes from '../app/routes/usuario';
import authRoutes from '../app/routes/auth';
import cors from 'cors';
import db from './db/connection';

class Server {

    private app: Application;
    private port: string;

    private apiPaths = {
        usuarios: '/api/usuarios',
        auth: '/api/auth',
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Metodos iniciales
        this.dbConnection();
        this.middlewares();
        // definir rutas
        this.routes();
    }

    // base de datos
    async dbConnection() {
        try {

            await db.authenticate();
            console.log('database online');

        } catch (error) {
            console.log(error);
        }
    }

    middlewares() {

        // CORS
        this.app.use(cors());
        // Lectura del body
        this.app.use(express.json());
        // Carpeta Publica
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRoutes);
        this.app.use(this.apiPaths.auth, authRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ' + this.port);
        })
    }
}

export default Server;