// clases
// no es posible crear objetos antes de desclarar la clase (no hay hoisting)

class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre; // se pone _nombre porque no puede haber una funcion con el mismo nombre del atributo
    this._apellido = apellido;
  }

  // getters y setters

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

  nombreCompleto() {
    // los metodos no usan la keyword function
    return this._nombre + " " + this._apellido;
  }
}

let miPersona = new Persona("Deiver", "Jair");

//console.log(miPersona);

// herencia

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }

  // sobreescribimos el metodo nombreCompleto

  nombreCompleto() {
    //   return this._nombre + " " + this._apellido + " " + this._departamento;
    return super.nombreCompleto() + " " + this._departamento;
  }
}

let miEmpleado = new Empleado("Alejandro", "Davila", "Abogato");

console.log(miEmpleado);

console.log(miEmpleado.nombreCompleto());
