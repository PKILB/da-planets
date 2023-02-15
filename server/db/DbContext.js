import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy.js';
import { GalaxyPlanetSchema } from '../models/GalaxyPlanet.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  GalaxyPlanets = mongoose.model('GalaxyPlanet', GalaxyPlanetSchema)
}

export const dbContext = new DbContext()
