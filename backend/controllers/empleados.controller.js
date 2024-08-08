import { EmpleadosM  } from "../models/practica.model";

const  test =()=>{
    console.log("llamado de empleados ") 
}
EmpleadosM.create({
    name : "Pedro",
    app : "Garcia",
    id : 20324, 
    edad : 34
})
export default test ();
