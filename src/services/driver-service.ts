import { IDrivers } from "../models/interfaces/IDrivers"
import { IResponseService } from "../models/interfaces/IResponseService"
import * as driverRepository from "../repositories/driver-Repository";
import { uStatusCode } from "../utils/uStatusCode"

// Simulating a database with in-memory data
//const _driverRepository: IDrivers[] = driverRepository


//const _driverRepository: IDrivers[] = driverRepository;


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
    responseService.data = await driverRepository.findAllDrivers();

    return responseService;
}

export const getDriversById = async (id: number): Promise<IResponseService<IDrivers>> => {

    console.log(`Fetching team with ID: ${id}`);
    //console.log(`Repository: ${_driverRepository.length} teams available`);

    const dados = await driverRepository.findDriversById(id);
    
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