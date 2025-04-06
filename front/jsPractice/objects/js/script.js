let persona = {
  nombre: "Deiver",
  apellido: "Bernal",
  id: "1027520338",
  novia: "Paula",
  get getNombre() {
    return this.nombre;
  },
  set name(setNombre) {
    this.nombre = setNombre;
  },
};

console.log(persona); // esto no me imprime el objeto

console.log(persona.getNombre); // no es necesario usar parentesis porque es un metodo get

persona.name = "Jair"; // esta llamando el setter

console.log(persona.getNombre);

// constructor (no es necesario que este en una clase)

function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
}

let miPersona = new Persona("Deiver", "Bernal", "debernalg@unal.edu.co");

console.log(miPersona);

// uso de call para utilizar un metodo dentro de un objeto que se utilice en otro objeto

let persona1 = {
  nombre: "Deiver",
  apellido: "Bernal",
  email: "debernalg@unal.edu.co",
  nombreCompleto: function (titulo, tel) {
    return this.nombre + " " + this.apellido + " " + titulo + " " + tel;
  },
};

let persona2 = {
  nombre: "Paula",
  apellido: "Lopez",
  email: "plopezpa@unal.edu.co",
};

let nombreP2 = persona1.nombreCompleto.call(persona2, "Profe", "3122526");

console.log(nombreP2);
