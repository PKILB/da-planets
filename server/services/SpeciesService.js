import { dbContext } from "../db/DbContext.js"




class SpeciesService {


    async getSpecies() {
        const species = await dbContext.Species.find()
        return species
    }
}

export const speciesService = new SpeciesService()