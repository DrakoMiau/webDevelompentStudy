import {Persona} from "./Persona"
class Empleado extends Persona{
  static contadorEmpleados = 0;
  constructor (nombre, apellido, edad, sueldo){
    super.nombre = nombre;
    super.apellido = apellido;
    super.edad = edad;
    this.idEmpleado = ++Empleado.contadorEmpleados;
    this._sueldo = sueldo;
  }

  get idEmpleado (){
    return this._idEmpleado;
  }

  get sueldo(){
    return this._sueldo;
  }

  set sueldo(sueldo){
    this._sueldo = sueldo;
  }

  toString(){
    
  }

}
