// practica de funciones flecha

// La forma mas basica de definir una funcion es:

function miFuncionNormal() {
  console.log("Funcion Normal");
}

miFuncionNormal();

// Con let

/// miFuncionLet(); // Error porque miFuncionLet esta definida despues de su llamada

let miFuncionLet = function () {
  console.log("Funcion Normal");
};

// funcion flecha

let myArrowFunction = () => {
  console.log("Funcion flecha con let (se puede modificar)");
};

myArrowFunction();

// podemos definirla en una sola linea sin {}

let myOneLineArrowFunction = () => console.log("Arrow en una linea");

myOneLineArrowFunction();

// Para retornar un objeto hay ciertas particularidades

let returnObjectFunction = () => ({ nombre: "Deiver" }); // solo {nombre: 'Deiver'} traeria conflictos porque {} tambien se lee como el bloque de la funcion

console.log(returnObjectFunction());

// recibiendo parametros en una arrow

let sum = (a, b) => console.log(`${a} + ${b} = ${a + b}`);

sum(10, 20);
