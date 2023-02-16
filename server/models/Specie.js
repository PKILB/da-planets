import { Schema } from "mongoose";



export const SpecieSchema = new Schema({
    name: { type: String, required: true, maxLength: 20}
}, { timestamps: true, toJSON: { virtuals: true }})