import {Schema,model} from "mongoose"

export const entradas =new Schema({
    name:String,

    id:Number,


})
export const entradasm = new model("entradas",entradas) 