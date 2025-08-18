import { FastifyRequest, FastifyReply} from "fastify"
import { uStatusCode } from "../utils/uStatusCode";

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

export const teamsControllers = async (request: FastifyRequest, response: FastifyReply) =>{
    response.type('application/json').code(uStatusCode.OK).send({teams});
};

export const teamsFilterController = async (request: FastifyRequest, response: FastifyReply) => {
    const { id } = request.params as { id: string };
    const teamId = parseInt(id);
    const team = teams.find(t => t.id === teamId);
    
    if (team) {
        response.type('application/json').code(uStatusCode.OK).send(team);
    } else {
        response.type('application/json').code(uStatusCode.NOT_FOUND).send({ error: 'Team not found' });
    }
};

export const driversControllers = async (request: FastifyRequest, response: FastifyReply) =>{
    response.type('application/json').code(uStatusCode.OK).send({drivers});
};

export const driversFilterControllers = async (request: FastifyRequest, response: FastifyReply)=>{
    const { id } = request.params as { id: string };
    const _id =parseInt(id);
    const driver = drivers.find(d => d.id === _id);

    if(driver) {
        response.type('application/json').code(uStatusCode.OK).send(driver);
    } else {
        response.type('application/json').code(uStatusCode.NOT_FOUND).send({ error: 'Driver not found' });
    }
};
