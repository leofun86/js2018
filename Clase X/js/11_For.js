//Es un bucle determinado ya que se especifica las veces que se repetirá
// Su sintaxis se compone de: Iniciación de variable; Número de vueltas; Incremento o decremento

//ejemplos
let valores = [1, 2, 3, 4, 5];
valores = valores.join('<br>');

document.write('REPETIDOR FOR<br>');
for (let i=0; i < valores.length; i++) {
  document.write(valores[i]);
}
