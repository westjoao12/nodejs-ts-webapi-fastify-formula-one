import { IDrivers } from "../models/interfaces/IDrivers";

export const driverRepository: IDrivers[] = [
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

export const findAllDrivers = async () : Promise<IDrivers[]> => {
    return driverRepository;
}

export const findDriversById = async (id: number) : Promise <IDrivers | undefined> => {
    return driverRepository.find(driver => driver.id === id);
}