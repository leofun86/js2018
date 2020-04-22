//Simplifica el bucle tradicional sin tener que darle un número de vueltas ni realizar un incremento

//FOR OF
let valores = [1, 2, 3, 4, 5, 6, 7];
document.write('FOR OF<br>');
for (let val of valores) {
  document.write('Valor: '+val+'<br>');
}
document.write('<br><br>FOR IN');
for (let val in valores) {
  document.write('Valor: '+val+'<br>');
}
document.write('<br><br>EXTRAS<br>');
for (let val of valores) {
  if (val == 2 || val == 5) {
    continue;
  }
  document.write('Valor: '+val+'<br>');
}
document.write('<br><br>');
for (let val of valores) {
  if (val == 4 || val == 5) {
    break;
  }
  document.write('Valor: '+val+'<br>');
}
