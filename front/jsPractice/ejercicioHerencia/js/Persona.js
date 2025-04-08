export class Persona {
  static contadorPersonas = 0;
  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._idPersona = ++Persona.contadorPersonas; // Creo el atributo idPersona dinamicamente y le asigno la variable incrementada
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  get idPersona() {
    return this._idPersona;
  }

  toString(){
    return this._nombre + " " + this._apellido + " " + this._edad + " con id: " + this._idPersona;
  }
}
