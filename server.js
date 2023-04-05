import express from 'express';
import injectRoutes from './routes/index';

const server = express();

injectRoutes(server);

export default server;
