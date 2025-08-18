import { IResponseService } from '../models/interfaces/IResponseService';
import { ITeams } from '../models/interfaces/ITeams';
import { uStatusCode } from '../utils/uStatusCode';

const teams = [
    { id: 1, name: "McLaren", base: "Woking, UK" },
    { id: 2, name: "Ferrari", base: "Maranello, Italy" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, UK" },
    { id: 4, name: "Mercedes", base: "Brackley, UK" },
    { id: 5, name: "Alpine", base: "Enstone, UK" }
]

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
    responseService.data = teams;

    return responseService;
};

export const getTeamsById = async (id:number) : Promise<IResponseService<ITeams>> => {
    const team = teams.find(t => t.id === id);
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