/* VER MÁS: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
  EXPRESIONES REGULARES
    DELIMITADORES
      ^ => Antes de este símbolo no puede haber nada.
      $ => Después de este símbolo no puede haber nada.
        EJ: ^Hola$
    CANTIDAD
      - Llaves: Lo que está antes tiene que aparecer una cantidad de veces exacta. Exiten tres combinaciones posibles:
        {n} Se tiene que repetir n veces.
        {n,ms} Se tiene que repetir n y m veces, ambas incluídas.
        {n,} Se tiene que repetir un mínimo de n veces.
          EJ => ^[a-zA-Z]{1,3}@{1}$
      - Asterísco: Lo que está antes del asterisco puede estar, no estar y se puede repetir.
          EJ => .*@.*\..*
      - Interrogación: Lo que está antes de la interrogación puede no estar, pero si está puede aparecer solo una vez.
          EJ => ^[ae]?$
      - Operador +: Lo que está antes del + tiene que estar una vez como mínimo.
          EJ => A-[0-9]+
*/
const txt = document.getElementById('text');

//Búsqueda con delimitador
console.log('BÚSQUEDA CON DELIMITADORES');
console.log(/^Lorem/gi.test(txt.textContent.trim()));
console.log(/laborum$/gi.test(txt.textContent.trim()));
console.log(/laborum.$/gi.test(txt.textContent.trim()));
//Búsqueda por cantidades
console.log('BÚSQUEDA POR CANTIDADES')
console.log(/(a){3}@hotmail\.com$/gi.test(txt.textContent.trim()));
//Búsqueda antes y después del arroba (cualquier cosa antes del arroba, cualquier cosa después, y cualquier cosa después del punto contiguo)
console.log('BÚSQUEDA CON ASTERISCO');
console.log(/.*@.*\..*/gi.test(txt.textContent));
console.log('BÚSQUEDA CON INTERROGACIÓN');
console.log(/sint?/gi.test(txt.textContent));
console.log('BÚSQUEDA CON +');
console.log(/(aaaa+)@hotmail.com/gi.test(txt.textContent));
