
import { EntrenadoresM } from "../models/entrenadores.model"
const test =()=>{
    console.log("Llamando a tecnicos")
} 
EntrenadoresM.create({
    name:"pancho",
    app :"rivers",
    tipo : "automotriz",
    duracio :" 4semanas"
})
export default test() ;



