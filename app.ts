import dotenv from 'dotenv';
import Server from './config/server';
dotenv.config();

const server = new Server();

server.listen();