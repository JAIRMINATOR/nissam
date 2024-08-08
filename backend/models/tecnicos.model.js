

import { Entrenadores } from "../models/entrenadores.model";
import { model } from "mongoose";

export const tecnicosM= new model('tecnicos', Entrenadores)