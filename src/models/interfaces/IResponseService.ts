import { ITeams } from "./ITeams";

export interface IResponseService {
    statusCode: number;
    data: [] | ITeams[] | ITeams;
}