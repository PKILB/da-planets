import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId


export const ColonySchema = new Schema({
    name: { type: String, required: true, maxLength: 50},
    population: { type: Number, maxLength: 1000000000},
    planetId: { type: ObjectId, ref: 'Planet', required: true },
    speciesId: { type: ObjectId, ref: 'Species', required: true }
}, { timestamps: true, toJSON: { virtuals: true }})