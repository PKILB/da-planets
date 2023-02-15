import { Schema } from "mongoose"


const ObjectId = Schema.Types.ObjectId


export const GalaxyPlanetSchema = new Schema({
    name: {type: String, required: true, maxLength: 50},
    biome: {type: String, required: true, minLength: 20, maxLength: 200},
    atmosphere: {type: Boolean, required: true}, 
    

    galaxyId: { type: ObjectId, ref: 'Galaxy', required: true },

}, {timestamps: true, toJSON: { virtuals: true }})