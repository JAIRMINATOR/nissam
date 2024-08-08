
import { lideresM} from "../models/lideres.model";
const test =()=>{
    console.log("Llamando a tecnicos")
} 
lideresM.create({
    name:"pancho",
    app :"rivers",
    tipo : "automotriz",
    duracio :" 4semanas"
})
export default test() ;


