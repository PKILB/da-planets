import { dbContext } from "../db/DbContext.js"



class GalaxyPlanetsService {
    async getPlanetsByGalaxyId(galaxyId) {
        const planets = await dbContext.GalaxyPlanets
        .find({ galaxyId })
        return planets
    }


}

export const galaxyPlanetsService = new GalaxyPlanetsService()