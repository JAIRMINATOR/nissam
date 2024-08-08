import {Schema , model } from "mongoose"

export const lideres = new Schema({
    name: String,
    puesto : String,
    id : Number, 
})
export const lideresM = new model("lideres",lideres) 