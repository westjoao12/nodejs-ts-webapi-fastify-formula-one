import { FastifyRequest, FastifyReply} from "fastify"
import { uStatusCode } from "../utils/uStatusCode";
import { ITeams } from "../models/interfaces/ITeams";
import { IResponseService } from "../models/interfaces/IResponseService";
import {getTeams, getTeamsById} from "../services/team-service";
import { IDrivers } from "../models/interfaces/IDrivers";
import { getDrivers, getDriversById } from "../services/driver-service";

export const teamsControllers = async (request: FastifyRequest, response: FastifyReply) =>{

    const responseService: IResponseService<ITeams> = await getTeams();

    if (responseService.statusCode !== uStatusCode.OK) {
        return response.type('application/json').code(responseService.statusCode).send({ error: 'Error fetching teams' });
    }
    response.type('application/json').code(responseService.statusCode).send(responseService.data);
};

export const teamsFilterController = async (request: FastifyRequest, response: FastifyReply) => {

    const { id } = request.params as { id: string };
    const teamId = parseInt(id);

    const responseService: IResponseService<ITeams> = await getTeamsById(teamId);
    
    if (responseService.statusCode === uStatusCode.OK) {
        response.type('application/json').code(responseService.statusCode).send(responseService.data);
    } else {
        response.type('application/json').code(responseService.statusCode).send({ error: 'Team not found' });
    }
};

export const driversControllers = async (request: FastifyRequest, response: FastifyReply) =>{

    const resposeService: IResponseService<IDrivers> = await getDrivers();

    if (resposeService.statusCode !== uStatusCode.OK) {
        return response.type('application/json').code(resposeService.statusCode).send({ error: 'Error fetching drivers' });
    }
    response.type('application/json').code(resposeService.statusCode).send(resposeService.data);
};

export const driversFilterControllers = async (request: FastifyRequest, response: FastifyReply)=>{
    const { id } = request.params as { id: string };
    const _id =parseInt(id);
    
    const responseService: IResponseService<IDrivers> = await getDriversById(_id);

    if(responseService.statusCode === uStatusCode.OK) {
        response.type('application/json').code(responseService.statusCode).send(responseService.data);
    } else {
        response.type('application/json').code(responseService.statusCode).send({ error: 'Driver not found' });
    }
};
