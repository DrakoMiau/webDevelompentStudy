import {Persona} from "./Persona"
class Cliente extends Persona{
  static contadorClientes = 0;
  constructor (nombre, apellido, edad, fechaRegistro){
    super.nombre = nombre;
    super.apellido = apellido;
    super.edad = edad;
    this._idCliente = ++Cliente.contadorClientes;
    this._fechaRegistro = fechaRegistro;
  }

  get idCliente (){
    return this._idCliente;
  }

  get fechaRegistro(){
    return this._fechaRegistro;
  }

  set fechaRegistro(fechaRegistro){
    this._fechaRegistro = fechaRegistro;
  }

  toString(){
    
  }

}
