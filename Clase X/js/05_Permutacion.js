const numbers = document.querySelector("#div1");
const result = document.querySelector("#div2");

let a = prompt('Introduzca el primer número');
let b = prompt('Introduzca el segundo número');
let c = prompt('Introduzca el tercer número');

numbers.textContent = `NÚMEROS INGRESADOS ==> ${a}, ${b} y ${c}}`;

//Ejercicio: mostrar los números de mayor a menor
if (a>=b && a>=c) {
  if (b>=c) {
    result.textContent = `RESULTADO ==> El orden es ${a}, ${b} y ${c}`;
  } else {
    result.textContent = `RESULTADO ==> El orden es ${a}, ${c} y ${b}`;
  }
} else if (b>=a && b>=c) {
  if (a>=c) {
    result.textContent = `RESULTADO ==> El orden es ${b}, ${a} y ${c}`;
  } else {
    result.textContent = `RESULTADO ==> El orden es ${b}, ${c} y ${a}`;
  }
} else if (c>=a && c>=b) {
  if (a>=b) {
    result.textContent = `RESULTADO ==> El orden es ${c}, ${a} y ${b}`;
  } else {
    result.textContent = `RESULTADO ==> El orden es ${c}, ${b} y ${a}`;
  }
}
