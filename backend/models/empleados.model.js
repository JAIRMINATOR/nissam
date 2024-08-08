import {Schema,model} from "mongoose"

export const Empleados =new Schema({
    name:String,
    app:String,
    id:Number,
    edad:Number

})
export const EmpleadosM = new model("empleados",Empleados) 