import {Schema , model } from "mongoose"


export const Entrenadores = new Schema({
    name : String,
    app: String ,
    tipo : String,
    duracio:String
})
export const EntrenadoresM = new model("Entrenadores",Entrenadores)