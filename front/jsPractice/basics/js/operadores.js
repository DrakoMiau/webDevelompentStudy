let a = 5;
let b = "5";

console.log("a == b", a == b);
console.log("a === b", a === b);

let argumento = 20;
// paso por valor

function cambiarValor(parametro) {
  parametro = 10;
}
cambiarValor(argumento);

console.log(argumento); // el valor no deberia alterarse

// paso por referencia
let miArreglo = [10, 25];

function cambiarValorReferencia(parametro) {
  parametro[0] = 20;
}

cambiarValorReferencia(miArreglo);

console.log(miArreglo); // dado que el arreglo es de tipo object se pasa su referencia y por lo tanto deberia ser alterado

// Las cadenas son inmutables, solo se pueden reasignar
// Obtencion de subcadenas

let cadenaPrincipal = "Hola a todos";

console.log(cadenaPrincipal.substring(0, 4)); // no se incluye el caracter indice de fin

let num1 = "10",
  num2 = "20";

// pasar de cadena a numero

let sum = parseInt(10) + parseInt(20);

console.log(sum);

// pasar numero a cadena

num1 = 10, num2 = 20;

sum = num1.toString() + num2.toString();

console.log(sum);
