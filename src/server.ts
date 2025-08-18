import fastify from 'fastify';
import cors from '@fastify/cors';
import { teamsControllers, teamsFilterController, driversControllers, driversFilterControllers } from './controllers/formula-controller';
import IDriverParams from './models/interfaces/IDriverParams';
import createServer from './app';

const server = createServer();

server.listen({port: 3000}, ()=>{
    console.log('Server listening on port 3000');
})