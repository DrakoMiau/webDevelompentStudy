class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }


  // getters y setters

 /* get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }*/
}

class Estudiante extends Persona {
  _nombre ='zapato'
  static contadorEstudiantes = 0;
  constructor(nombre, apellido) {
    super(nombre, apellido)
    this._idEstudiante = ++Estudiante.contadorEstudiantes;
  }
  get idEstudiante (){
    return this._idEstudiante;
  }

  set idEstudiante (idEstudiante){
    this._idEstudiante = idEstudiante;
  }

}

let cristian = new Estudiante('cristan', 'barrera');

let deiver = new Estudiante('Deiver', 'Bernal')

deiver.imprimir()

deiver.imprimirFlecha()

