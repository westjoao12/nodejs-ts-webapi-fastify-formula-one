import { IResponseService } from '../models/interfaces/IResponseService';
import { ITeams } from '../models/interfaces/ITeams';
import { uStatusCode } from '../utils/uStatusCode';
import { teamRepository } from '../repositories/team-Repository';

// Simulating a database with in-memory data
const _teamRepository: ITeams[] = teamRepository;

const responseService: IResponseService<ITeams> = {
    statusCode: uStatusCode.NOT_FOUND,
    data: [{
        id: 0,
        name: "",
        base: ""
    }]
};

export const getTeams = async (): Promise<IResponseService<ITeams>> => {
    responseService.statusCode = uStatusCode.OK;
    responseService.data = _teamRepository;

    return responseService;
};

export const getTeamsById = async (id:number) : Promise<IResponseService<ITeams>> => {

    const team = _teamRepository.find(t => t.id === id);

    if (team) {
        responseService.statusCode = uStatusCode.OK;
        // Clear previous data and push the found team
        responseService.data = [];
        responseService.data = team;
    } else {
        responseService.statusCode = uStatusCode.NOT_FOUND;
        }
    return responseService;
}