//Son fragmentos de código que ejecutan una tarea sin necesidad esta de ser reescrita
//Ayudan a modularizar el código
//Es recomendable que deban realizar UNA SOLA TAREA
//Puede recibir parámetros: son los que utilizará la función par aejecutarse (no siempre se requieren)
//Pueden devolver un valor

//Ejemplo v1.0
function nombreFuncion (param1, param2) {
  //Código a ejecutar
  return param1+param2;
}
//Ejemplo v2.0 ==> Función de flecha
//Si solo tiene una instrucción:
const valFuncion = (param1, param2) => param1+param2;
//Si solo tiene más de una instrucción:
const valFuncion2 = (param1, param2) => {
  return param1+param2;
}

document.write(`-----------------------<br>FUNCIÓN BÁSICA<br>-----------------------<br>`);
document.write(valFuncion2(2, 3)+'<br>');

function saludar () {
  document.write('Hola Mundo<br>');
}
document.write('--------------------------<br>FUNCIÓN SALUDAR<br>--------------------------<br>');
saludar();

document.write('--------------------------------------<br>FUNCIÓN SALUDAR USUARIO<br>--------------------------------------<br>');
const saludarUsuario = user => document.write(`Hola ${user}<br>`);
let nom = prompt('Ingresa tu nombre');
saludarUsuario(nom);
saludarUsuario('Ricardo');
saludarUsuario('Ricarda');
saludarUsuario('Ricarde');
