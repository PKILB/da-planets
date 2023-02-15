import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";





export class GalaxiesController extends BaseController {
    constructor() {
        super('api/galaxies')
        this.router
        .get('', this.getGalaxies)
    }

    async getGalaxies(req, res, next) {
        try {
            let galaxies = await galaxiesService.getGalaxies()
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }

}