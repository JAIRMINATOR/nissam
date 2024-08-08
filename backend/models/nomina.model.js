import {Schema , model } from "mongoose"

export const  nomina = new Schema({
    name: String ,
    sueldo: Number,

}
)
export const  nominam = new model ("nominas" , nomina )