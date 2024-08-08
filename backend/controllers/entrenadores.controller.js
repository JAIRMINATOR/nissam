
import { EntrenadoresM } from "../models/entrenadores.model"
const test =()=>{
    console.log("Llamando a entrenadores")
} 
EntrenadoresM.create({
    name:"paco",
    app :"lopez",
    tipo : "automotriz",
    duracio :"2 semanas"
})
export default test() ;