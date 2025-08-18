import { IDrivers } from "../models/interfaces/IDrivers"
import { IResponseService } from "../models/interfaces/IResponseService"
import { driverRepository } from "../repositories/driver-Repository";
import { uStatusCode } from "../utils/uStatusCode"

// Simulating a database with in-memory data
//const _driverRepository: IDrivers[] = driverRepository;


const _driverRepository: IDrivers[] =
[
    { id: 1, name: "Lewis Hamilton", teamId: 4 },
    { id: 2, name: "Max Verstappen", teamId: 3 },
    { id: 3, name: "Charles Leclerc", teamId: 2 },
    { id: 4, name: "Lando Norris", teamId: 1 },
    { id: 5, name: "Fernando Alonso", teamId: 5 },
    { id: 6, name: "Carlos Sainz", teamId: 2 },
    { id: 7, name: "Sergio Perez", teamId: 3 },
    { id: 8, name: "Esteban Ocon", teamId: 5 },
    { id: 9, name: "Oscar Piastri", teamId: 1 },
    { id: 10, name: "George Russell", teamId: 4 }
]


//const _driverRepository: IDrivers[] = driverRepository;


console.log(`Driver repository initialized with ${_driverRepository.length} drivers.`);

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
    responseService.data = _driverRepository;

    return responseService;
}

export const getDriversById = async (id: number): Promise<IResponseService<IDrivers>> => {

    console.log(`Fetching team with ID: ${id}`);
    //console.log(`Repository: ${_driverRepository.length} teams available`);

    const dados = _driverRepository.find(t => t.id === id);
    
    if (dados) {
        responseService.statusCode = uStatusCode.OK;
        // Clear previous data and push the found driver
        responseService.data = [];
        responseService.data = dados;
    } else {
        responseService.statusCode = uStatusCode.NOT_FOUND;
    }
    return responseService;
}