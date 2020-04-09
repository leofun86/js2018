let var1 = 3;
let var2 = 2;
//Condicional simple: evalua una condiciona y da un resultado
document.write('Condicional simple<br>');
if (var1 === 3) document.write('El número vale 3<br>');
//Condicional compuesta: evalúa una condición, si se cumple ejecuta una sentencia, sino ejectuta otra sentencia
document.write('<br>Condicional compuesto<br>');
if (var2 === 3) {document.write('El número vale 3<br>')} else {document.write('El número no vale 3<br>')};
//Condicional múltime: evalúa varias condiciones
document.write('<br>Condicional múltiple<br>');
if (var1 === 4) {
  document.write('El numero vale 4<br>');
} else if (var1 === 5) {
  document.write('El número vale 5<br>');
} else if (var1 === 3) {
  document.write('El número vale 3<br>');
} else {
  document.write('Error<br>');
}
//Condicionales anidadas: son condicionales dentro de otras condicionales
if (var1 === 3) {
  if (var2 === 2) document.write(`<br>Var1 vale ${var1} y Var2 ${var2}<br>`);
}
//Condicional en una variable
let condicion = (var1 === 2) ? 'Hola' : 'Chau';
document.write(`<br>${condicion}<br>`);
