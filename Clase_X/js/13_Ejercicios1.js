/*IMPRIMIR NOMBRE, EDAD y EDAD DEL PRÓXIMO AÑO
let nombre = prompt("Ingresa tu nombre");
let edad = parseInt(prompt("Ingresa tu edad"));

document.write(`Hola ${nombre}, tenés ${edad} años y el año que viene tendrás ${edad+1}`);
*/

/*CALCULAR EL ÁREA DE UN TRIÁNGULO, RECTÁNGULO Y CIRCULO
let figure = parseInt(prompt("Introduce la figura a la que quieres calcularle el área:\nTriángulo (1 )\nRectángulo (2)\nCírculo (3)"));

let base;
let height;
let radius;
let result;

switch (figure) {
  case 1:
    base = prompt("Introduce la base del triángulo");
    height = prompt("Introduce la altura del triángulo");
    result = `El área del triángulo es: ${(base*height)/2}`;
  break;
    base = prompt("Introduce la base del rectángulo");
    height = prompt("Introduce la altura del rectángulo");
    result = `El área del rectángulo es: ${base*height}`;
  case 2:
  break;
  case 3:
    radius = prompt("Introduce el radio del círculo");
    result = `El área del círculo es:<br>Original: ${Math.PI * Math.pow(radius, 2)}<br>Redondeado: ${Math.round(Math.PI * Math.pow(radius, 2))}`;
  break;
  default: result="Opción incorrecta";
}
document.write(result);
*/

/*EVALUAR SI UN NÚMERO ES PAR O IMPAR
let numeros = [];
for (let i=0; i < 4; i++) {
  numeros[i] = parseInt(prompt("Ingrese un número del índice "+(i+1)));
}
for (let val in numeros) {
  (numeros[val]%2 == 0) ? document.write(`${numeros[val]} es par.<br>`) : document.write(`${numeros[val]} es impar<br>`);
}
*/

/*EVALUAR SI UN NÚMERO ES PRIMO O NO
let num;
let divisor=0;
let result;

do {
  (num==1) ? num=prompt('Error: ingrese un número mayor a 1') : num=prompt('Ingrese un número mayor a 1');
} while (num==1 || isNaN(num));

for (let i=2; i<= num; i++) {
  if (num%i == 0) {
    divisor++;
  }
  break;
}

(divisor === 0) ? result=`${num} es primo` : result=`${num} no es primo`;

document.write(result);
*/

//CALCULAR FACTORIAL DE UN NÚMERO
let num=parseInt(prompt('Ingrese un número mayor a 0'));
let nums1=[];
let result=1;
while (num == 0 || isNaN(num)) {
  num=parseInt(prompt('Error; ingrese un número mayor a 0'))
}
for (let i=num; i>0; i--) {
  result*=i;
}
document.write(result);
