import { entradas } from "./entradas.model";
import { model } from "mongoose";

export const entradasm= new model('salidas', entradas)