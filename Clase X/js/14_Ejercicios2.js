//PROGRAMA QUE PIDA NÚMEROS Y QUE LA SUMA DE ELLOS NO SUPERE 50
//MOSTRAR EL TOTAL ACUMULADO Y LA CANTIDAD DE PETICIONES DE NÚMEROS
/*
let num;
let suma=0;
let cont=0;
let numeros=[];

for (cont; suma < 50; cont++) {
    num = parseInt(prompt('Ingresa un número'));
    numeros[cont]=num;
    suma+=num;
    if (suma > 50) {
      suma -= numeros[cont];
      numeros.pop();
      cont--;
      break;
    }
}
numeros=numeros.join(' + ');
document.write(`RESUMEN<br>Total: ${suma}<br>Números: ${numeros}<br>Cantidad: ${cont}`);
*/
//PROGRAMA QUE TENGA TRES ARRAYS: El primero tenga una cantidad números aleatorios a petición,
//el segundo sea de números pares y el tercero impares
//Cuando el primer array tenga todos los números, multiplicará cada uno por un número entre 1 y 10, y dependiendo del resultado, este último se almacenará en el array par o impar
/*
let nums=[];
let numPar=[];
let numImpar=[];
let multiplica;
let cuenta=[];
for (let i=0; i < 4; i++) {
  nums[i]=parseInt(prompt('Ingrese un número'));
  multiplica=Math.round(Math.random()*10+1);
  const result = nums[i] * multiplica;
  cuenta.push(`${nums[i]} * ${multiplica} = ${result}<br>`);
  if (result%2 == 0) {
    numPar.push(result);
  } else {
    numImpar.push(result);
  }
}
nums=nums.join(', ');
numPar=numPar.join(', ');
numImpar=numImpar.join(', ');

document.write(`Números: ${nums}<br>Array par: ${numPar}<br>Array impar: ${numImpar}<br><br>`);
for (let val of cuenta) {
  document.write(val);
}
*/

//PROGRAMA QUE SOLICITA UN NÚMERO DE DNI, LUEGO OBTENER EL RESULTADO DEL MÓDULO ENTRE 23 y ASIGNARLO AL ÍNDICE DEL ARRAY LETRAS
/*
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T', ];

const dni = prompt('Introduce tu DNI');
if (dni.length ==8 && parseInt(dni)>0) {
  document.write(`Tu DNI es ${dni}-${letras[dni%23]}`);
}
*/

//PROGRAMA QUE SOLICITE UNA PALABRA, Y DEVUELVA LA CANTIDAD DE VOCALES, CONSONANTES Y CANTIDAD DE LETRAS
/*
let palabra = prompt('Escriba una palabra');
let array = palabra.split("", palabra.length);
let consonante=0;
let vocal=0;

for (let val of array) {
  if (val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u') {
    vocal++;
  } else {
    consonante++;
  }
}
document.write(`Palabra: ${palabra}<br>Vocales: ${vocal}<br>Consonantes: ${consonante}<br>Letras: ${array.length}`);
*/

//PROGRAMA QUE SOLICITE UN COLOR, Y SE VErIFIQUE SI COINCIDE CON LOS COLORES DE UN ARRAY
let colores = ['azul', 'verde', 'amarillo', 'rosa', 'gris'];
let color = prompt('Introduzca un color').toLowerCase();
let exist=0;

/*
for (let col in colores) {
  if (color === colores[col]) { exist=1; }
}
(exist==1) ? document.write('El color existe') : document.write('El color no existe';
*/
(colores.indexOf(color) !== -1) ? document.write('El color existe') : document.write('El color no existe');
