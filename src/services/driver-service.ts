import { IDrivers } from "../models/interfaces/IDrivers"
import { IResponseService } from "../models/interfaces/IResponseService"
import { uStatusCode } from "../utils/uStatusCode"

const drivers = [
    { id: 1, name: "Lewis Hamilton", teamId: 4 },
    { id: 2, name: "Max Verstappen", teamId: 3 },
    { id: 3, name: "Charles Leclerc", teamId: 2 },
    { id: 4, name: "Lando Norris", teamId: 1 },
    { id: 5, name: "Fernando Alonso", teamId: 5 }
]

const responseService: IResponseService<IDrivers> = {
    statusCode: uStatusCode.NOT_FOUND,
    data: [{
        id: 0,
        name: "",
        teamId: 0
    }]
}

export const getDrivers = async (): Promise<IResponseService<IDrivers>> => {
    responseService.statusCode = uStatusCode.OK;
    responseService.data = drivers;

    return responseService;
}

export const getDriversById = async (id: number): Promise<IResponseService<IDrivers>> => {
    const driver = drivers.find(d => d.id === id);
    if (driver) {
        responseService.statusCode = uStatusCode.OK;
        // Clear previous data and push the found driver
        responseService.data = [];
        responseService.data = driver;
    } else {
        responseService.statusCode = uStatusCode.NOT_FOUND;
    }
    return responseService;
}