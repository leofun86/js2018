let cadena = "Hola Mundo";
let cadena2 = '     Hola Mundo';
let cadena3 = 'Jelou';
document.write('Cadena original: '+cadena+'<br><hr>');

//MÉTODOS: Es todo aquello que una cadena puede hacer, ej: convertirse en mayúscula

//length: Devuelve la longitud de la cadena
document.write('Longitud de cadena: '+cadena.length+'<br>');
//toUpperCase: Convierte toda la cadena a mayúscula
document.write('Cadena mayúscula: '+cadena.toUpperCase()+'<br>');
//toLowerCase: Convierte toda la cadena a minúscula
document.write('Cadena minúscula: '+cadena.toLowerCase()+'<br>');
//indexOf: Devuelve la posición del caracter/cadena especificado
//Si encuentra el caracter/cadena, devuelve la posición, de lo contrario devolverá -1
document.write('Posición de la palabra "Mundo": '+cadena.indexOf('Mundo')+'<br>');
//replace: Reemplaza una cadena previamente buscada
document.write('Reemplazo de "Mundo" por "Leandro": '+cadena.replace('Mundo', 'Leandro')+'<br>');
//substring: Extrae toda la cadena desde la posición indicada en adelante, se puede establecer un final de rango
document.write('Extracto de cadena desde posición 2: '+cadena.substring(cadena.length, cadena.length-4)+'<br>');
document.write('Extracto de cadena desde posición 2 hasta 7: '+cadena.substring(2, 7)+'<br>');
//slice: Cumple la misma función que substring. Admite números negativos -> Final de cadena en retroceso
document.write('Extracto de cadena desde posición 3: '+cadena.slice(3)+'<br>');
document.write('Extracto de cadena desde posición -3: '+cadena.slice(-3)+'<br>');
document.write('Extracto de cadena desde posición 0 y -6: '+cadena.slice(0, -5)+'<br>');
//trim: Elimina los espacios de inicio y fin de la cadena
console.log(cadena2.trim());
//startsWith: Verifica que la cadena comience con un determinado valor
document.write('Evaluación de cadena inicial: '+cadena.startsWith('Hola')+'<br>');
document.write('Evaluación de cadena inicial + posición: '+cadena.startsWith('Mundo', 4)+'<br>');
//endsWith: Verifica que la cadena termine con un determinado valor
document.write('Evaluación de cadena final: '+cadena.endsWith('Mundo')+'<br>');
//Evalúa la palabra y la longitud a evaluar --> Dará error porque la longitud es de 10
document.write('Evaluación de cadena final + longitud: '+cadena.endsWith('Mundo', 9)+'<br>');
//includes: cumple la misma función de indexOf (busca un parámetro existente en la cadena)
document.write('Búsqueda de parámetro: '+cadena.includes('H')+'<br>');
document.write('Búsqueda de parámetro + posición inicial: '+cadena.includes('H', 1)+'<br>');
//repeat: repite un string el número de veces que se desee
document.write('Repetición de cadena: '+cadena3.repeat(3)+'<br>');
//Template Strings: Forma de concatenar texto con variables en una cadena completa
let nombre="Leo";
let apellido="Apellido";
let edad=33;
document.write(`Hola ${nombre} ${apellido}, tenés ${edad} años <br>`);
//Template String con operación aritmética
document.write(`Hola ${nombre} ${apellido}, y el año que viene tendrás ${edad+1} años<br>`);
