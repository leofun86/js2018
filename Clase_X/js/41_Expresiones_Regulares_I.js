/*
VER MÁS: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
HERRAMIENTA: https://regex101.com/
  EXPRESIONES REGULARES
    Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada para la búsqueda de patrones de cadena de caracteres u operaciones de sustituciones.

    SINTÁXIS => /patrón/
    BANDERAS
      i: ignore case => No diferencia entre mayúsculas y minúsculas.
      g: global => Busca la forma global, es decir, no se para después de la primer coincidencia.

*/
const txt = document.getElementById('text');
//FORMAS DE CREAR UNA EXPRESIÓN REGULAR
  //Estas dos maneras no son habituales hoy en día
const regEx = /lorem/gi;
const regEx2 = new RegEx('lorem', 'gi');
const regEx3 = new RegEx('/lorem/', 'gi');

console.log(regEx.test(txt.textContent))
