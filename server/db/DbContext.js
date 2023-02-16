import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ColonySchema } from '../models/Colony.js';
import { GalaxySchema } from '../models/Galaxy.js';
import { GalaxyPlanetSchema } from '../models/GalaxyPlanet.js';
import { SpecieSchema } from '../models/Specie.js';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Galaxies = mongoose.model('Galaxy', GalaxySchema);
  GalaxyPlanets = mongoose.model('GalaxyPlanet', GalaxyPlanetSchema)
  Colonies = mongoose.model('Colony', ColonySchema);
  Species = mongoose.model('Specie', SpecieSchema)
}

export const dbContext = new DbContext()
