import createServer from './app';

const server = createServer();

server.listen({port: 3000}, ()=>{
    console.log('Server listening on port 3000');
})