import { ITeams } from "../models/interfaces/ITeams";

const teamRepository: ITeams[] = [
    { id: 1, name: "McLaren", base: "Woking, UK" },
    { id: 2, name: "Ferrari", base: "Maranello, Italy" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, UK" },
    { id: 4, name: "Mercedes", base: "Brackley, UK" },
    { id: 5, name: "Alpine", base: "Enstone, UK" }
]


export const findAllTeams = async (): Promise<ITeams[]> => {
    return teamRepository;
}

export const findTeamById = (id: number): ITeams | undefined => {
    return teamRepository.find(team => team.id === id);
}