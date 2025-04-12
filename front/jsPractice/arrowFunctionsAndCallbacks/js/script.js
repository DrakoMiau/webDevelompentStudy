// practica de funciones flecha

// La forma mas basica de definir una funcion es:

miFuncionNormal();

function miFuncionNormal() {
  console.log("Funcion Normal");
}

miFuncionNormal();

// Con let

/// miFuncionLet(); // Error porque miFuncionLet esta definida despues de su llamada

let miFuncionLet = function () {
  console.log("Funcion Normal");
};

miFuncionLet = function () {
  console.log("Modificado");
};

miFuncionLet();

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

// funciones callBack, reescribimos sum

sum = (a, b) => a + b;

let imprimir = () => console.log(sum(10, 40));

imprimir();

// callbacks asincronas con setTimeout

let print = () => console.log("Hola mundo");
let print2 = () => console.log("Hola a todos");

function esperar(callback1, callback2) {
  setTimeout(callback1, 2000);
  setTimeout(callback2, 1000);
}

esperar(print, print2); // se ejecuta primero print 2 y luego print, lo que prueba que fue asincrono
