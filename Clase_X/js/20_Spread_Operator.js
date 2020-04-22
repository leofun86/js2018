//SPREAD OPERATOR u OPERADOR DE EXPANSIÓN: expande el contenido de un array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const addNumbers = (a, b, c) => {
  return a+b+c;
}
let numbersToAdd = [1, 2, 3];

document.write(`Primer prueba: ${addNumbers(...numbersToAdd)}<br>`);

//Agregar elementos de un array a otro con elementos
const arr1 = [3, 2, 1];
document.write(`Array sin push con spread: ${arr1}<br>`);
arr1.splice(arr1.length, 0, ...numbersToAdd);
document.write(`Array con push y spread: ${arr1}<br>`);
//Copiar un array
let arr2 = [];
document.write(`Array no copiado: ${arr2}<br>`);
document.write(`Array copiado: ${arr2=[...arr1]}<br>`);
//Concatenar arrays
const arr3 = [1, 3, 5];
const arr4 = [2, 4, 6];
const arrConcat = [...arr3, ...arr4];
document.write(`Array sin concatenar: ${arr3}<br>`);
document.write(`Array concatenado: ${arrConcat}<br>`);
//PARÁMETROS REST: Enviar un número indefinido de argumentosa una función
const restParms = (...numbers) => {
  return numbers;
}
document.write(`Función con parámetros rest (múltiples): ${restParms(arrConcat)}<br>`);
//Calcular máximo y mínimo
document.write(`Array sin calculo de máximo: ${arrConcat}<br>`);
document.write(`Número máximo de un array: ${Math.max(...arrConcat)}<br>`);
document.write(`Número mínimo de un array: ${Math.min(...arrConcat)}<br>`);
//Eliminar elementos duplicados
const dupli = [1, 1, 2, 2, 3, 3, 4, 4, 6, 7, 8, 9]
document.write(`Array con duplicados: ${dupli}<br>`);
const noDupli = [...new Set(dupli)];
document.write(`Array sin duplicados: ${noDupli}<br>`);
