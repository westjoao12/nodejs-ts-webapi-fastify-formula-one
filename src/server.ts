import fastify from 'fastify';

const server = fastify({logger: true});

const teams = [
    { id: 1, name: "McLaren", base: "Woking, UK" },
    { id: 2, name: "Ferrari", base: "Maranello, Italy" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, UK" },
    { id: 4, name: "Mercedes", base: "Brackley, UK" },
    { id: 5, name: "Alpine", base: "Enstone, UK" }
]

const drivers = [
    { id: 1, name: "Lewis Hamilton", teamId: 4 },
    { id: 2, name: "Max Verstappen", teamId: 3 },
    { id: 3, name: "Charles Leclerc", teamId: 2 },
    { id: 4, name: "Lando Norris", teamId: 1 },
    { id: 5, name: "Fernando Alonso", teamId: 5 }
]

server.get('/teams', async (request, response) =>{
    response.type('application/json').code(200).send({teams});
});

server.get('/teams/:id', async (request, response) => {
    const { id } = request.params as { id: string };
    const teamId = parseInt(id);
    const team = teams.find(t => t.id === teamId);
    
    if (team) {
        response.type('application/json').code(200).send(team);
    } else {
        response.type('application/json').code(404).send({ error: 'Team not found' });
    }
});

server.get('/drivers', async (request, response) =>{
    response.type('application/json').code(200).send({drivers});
})

interface DriverParams {
    id: string;
}

server.get<{Params: DriverParams}>('/drivers/:id', async (request, response)=>{
    const id = parseInt(request.params.id);
    const driver = drivers.find(d => d.id === id);

    if(driver) {
        response.type('application/json').code(200).send(driver);
    } else {
        response.type('application/json').code(404).send({ error: 'Driver not found' });
    }
})

server.listen({port: 3000}, ()=>{
    console.log('Server listening on port 3000');
})