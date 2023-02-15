import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"



class GalaxyPlanetsService {

    async createGalaxyPlanet(galaxyPlanetData) {
        const galaxy = await dbContext.Galaxies.findById(galaxyPlanetData.galaxyId)
        if (!galaxy) {
            throw new BadRequest('There is no galaxy with that Id you goof')
        }


        const galaxyPlanet = await dbContext.GalaxyPlanets.create(galaxyPlanetData)
        return galaxyPlanet
    }

    async getPlanetsByGalaxyId(galaxyId) {
        const planets = await dbContext.GalaxyPlanets
        .find({ galaxyId })
        return planets
    }


}

export const galaxyPlanetsService = new GalaxyPlanetsService()