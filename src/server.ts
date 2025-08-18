import fastify from 'fastify';
import cors from '@fastify/cors';
import { teamsControllers, teamsFilterController, driversControllers, driversFilterControllers } from './controllers/formula-controller';
import IDriverParams from './models/interfaces/IDriverParams';

const server = fastify({logger: true});

server.register(cors, {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
});

//
server.get('/teams', teamsControllers);

server.get('/teams/:id', teamsFilterController);

server.get('/drivers', driversControllers);

server.get<{Params: IDriverParams}>('/drivers/:id', driversFilterControllers)

server.listen({port: 3000}, ()=>{
    console.log('Server listening on port 3000');
})