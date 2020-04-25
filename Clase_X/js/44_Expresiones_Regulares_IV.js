/* VER MÁS: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
  EXPRESIONES REGULARES: Caracteres especiales
    \s  Coincide con un caracter de espacio, entre ellos incluídos espacio, tab, salto de página y de línea, y retorno de carro.
      EJ: ^[a-zA-Z]+\s[a-zA-Z]+$
    \S  Coincide con todo menos con caracteres de espacio.
      EJ: ^\S(5)$
    \d  Coincide con un caracter de número. Equivalente a [0-9].
      EJ: ^\d(5)$
    \D  Coincide con cualquier caracter no numérico. Equivalente a [^0-9].
      EJ: ^\D{5}$
    \w  Coincide con cualquier caracter alfanumérico, incluyendo el guión bajo. Equivalente a [A-Za-z0-9_].
      EJ: ^\w+@$
    \W  Coincide con todo menos con caracteres de palabra.
      EJ: ^\W+@$
*/
const txt = document.getElementById('text');

console.log(/.*(aaa)\s@hotmail.com/gi.test(txt.textContent))
console.log(/.*\S@gmail.com/gi.test(txt.textContent));
console.log(/\d@yahoo.com/gi.test(txt.textContent));
console.log(/\D@leo.com/gi.test(txt.textContent));
console.log(/.*\wgilo.net/gi.test(txt.textContent));
console.log(/\W@lalo.ru/gi.test(txt.textContent));
