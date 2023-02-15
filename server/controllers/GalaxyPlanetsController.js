import { galaxyPlanetsService } from "../services/GalaxyPlanetsService.js";
import BaseController from "../utils/BaseController.js";




export class GalaxyPlanetsController extends BaseController {

    constructor() {
        super('api/galaxyplanets')
        this.router
        .post('', this.createGalaxyPlanet)
    }
    async createGalaxyPlanet(req, res, next) {
        try {
            const galaxyPlanetData = req.body
            const galaxyPlanet = await galaxyPlanetsService.createGalaxyPlanet(galaxyPlanetData)
            return res.send(galaxyPlanet)
        } catch (error) {
            next(error)
        }
    }
}