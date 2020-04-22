//Estructura que permite almacenar varios datos y agruparlos
//Se pueden llenar con cualquier  tipo de dato válido de JS y deben ir separados por comas
//Pueden mezclarse tipos de datos en un solo array, pero no es recomendable
//Se declaran con llaves cuadradas o corchetes
//Pueden declararse vacíos o con datos ya establecidos

let numeros=[1, 2, 3, 4, 5];
let numeros2=['Uruguay', 'Argentina', 'Perú', 'Brasil', 'Alemania'];

//length: devuelve el largo del arrays
document.write(`Array: ${numeros}`);
document.write(`<br>El array tiene ${numeros.length} números`);
//isArray: devuelve valor true o false evaluando si que sea un array
document.write(`<br><br>La veracidad del array es: ${Array.isArray(numeros)}`);
//shift: elimina el primer elemento del array
document.write(`<br><br>Array sin shift: ${numeros}`);
numeros.shift();
document.write(`<br><br>Array con shift: ${numeros}`);
//pop: elimina el último elemento del array
document.write(`<br><br>Array sin pop: ${numeros2}`);
numeros2.pop();
document.write(`<br><br>Array con pop: ${numeros2}`);
//push: añade uno o más elemento al final del array
numeros.push(6)
document.write('<br><br>Array con push: '+numeros);
//unshift: añade uno o más elementos al comienzo del array
numeros2.unshift('Estados Unidos', 'Jamaica');
document.write('<br><br>Array con unshift: '+numeros2);
//indexOf: devuelve el primer índice del elemento que coincida con el valor especificado
document.write('<br><br>Array con indexOf: '+numeros.indexOf(6));
//lastIndexOf: devuelve el último índice del elemento que coincida con el valor especificado
numeros.push(6, 8, 9, 8, 8, 8);
document.write('<br><br>Array con lastIndexOf: '+numeros.lastIndexOf(8));
//reverse: invierte el órden del array
document.write('<br><br>Array con inverse: '+numeros.reverse());
//join: devuelve el array con los elementos con un separador que le indiquemos
document.write('<br><br>Array con join: '+numeros2.join(', '));
//splice: elimina o agrega uno o más elementos del arrays
//Eliminación desde la posición asignada hasta el final
//El valor A es la posición inicial, y el valor B la cantidad de valores que queremos eliminar, y el valor nC1... son los valores que queremos agregar a partir de la posición del valor A
//si el valor B es distinto de cero, añadirá los valores especificados a partir del valor A posteriormente de haver eliminado los especificados en el valor B
//si el valor B es 0, añadirá los valores especificados en nC1... sin eliminar los valores contiguos a la posición establecida en el valor A
let datos1 = [1, 2, 3, 4, 5, 6, 7, 8];
document.write('<br><br>Array sin splice: '+ datos1);
document.write('<br>Array con splice: '+ datos1.splice(2,2,14, 15, 16, 17, 18));
//slice: extrae los valores desde la posición del valor A, y opcionalmente hasta el valor de la posición B
//si no se le asigna valor a B, mostrará todos los valores hasta el final del array
let datos2 = [1, 2, 3, 4, 5, 6, 7, 8];
document.write('<br><br>Array sin slice: '+datos2);
document.write('<br>Array con slice con valor A y B: '+datos2.slice(3, 5));
document.write('<br>Array con slice sin valor B: '+datos2.slice(3));
