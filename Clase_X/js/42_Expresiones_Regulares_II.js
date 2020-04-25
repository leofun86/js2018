/* VER MÁS: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
  EXPRESIONES REGULARES
    COMODINES
    - Sustitución => Define un comodín dentro del patrón. El símbolo es el "." (sin comillas dobles)
    - Listado de caracteres válidos => Entre corchetes se pone una lista de los caracteres válidos.
        EJ: [aeiou] => Tomamos todas las vocales.
    - Rangos => Entre corchetes, si ponemos un guión entre dos caracteres, establecemos un rango.
        EJ: [a-z] => Tomamos todas las letras minúsculas. => Tabla ASCII: https://ascii.cl/es/
    - Mezcla entre rangos y listas => Podemos unir los dos anteriores en una sola expresión.
        EJ: [0-5ou] => Serían números del 0 al 5, las letras "o" y "u".
    - Cadenas completas => Para establecer una cadena completa, debe ir  entre paréntesis. Si queremos más palabras, irán separadas por un pipe.
        //Cuidado, los espacios antes y después de la palabra los toma como parámetro de búsqueda
        EJ: (palabra1|palabra2) => Son válidas las palabras "palabra1" y "palabra2".
*/
const txt = document.getElementById('text');
//FORMAS DE CREAR UNA EXPRESIÓN REGULAR
const regEx = /lorem/gi;

//Búsqueda de palabra
console.log(regEx.test(txt.textContent));
//Búsqueda de rango
console.log(/[1-4]/gi.test(txt.textContent));
//Búsuqeda de caracteres específicos
console.log(/[aeiu]/gi.test(txt.textContent));
//Búsqueda de palabras
console.log(/(Lorem|consectetur)/gi.test(txt.textContent));
