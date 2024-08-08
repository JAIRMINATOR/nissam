import { nomina, nominam } from "../models/nomina.model";
const test =()=>{
    console.log("llando a nomina")
}
nominam.create({
    name:"Panfilo",
    sueldo: 3000
})
export default test()