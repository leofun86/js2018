/*
let random = Math.round(Math.random()*100+1);
console.log(random);
let array=[];
let val = parseInt(prompt('Ingrese un número'));
array.push(val);
for (let cont=1; cont < 3; cont++) {
  if (val > random) {
    val = parseInt(prompt(`Es mayor: inténtelo nuevamente\nTe quedan ${3-cont} intentos`));
    array.push(val);
  } else if (val < random) {
    val = parseInt(prompt(`Es menor: inténtelo nuevamente\nTe quedan ${3-cont} intentos`));
    array.push(val);
  } else {
    break;
  }
}
array=array.join(', ');
if (val == random) {
  document.write(`¡CORRECTO!<br><br>Número random: ${random}<br>Números ingresados: ${array}<br>`);
} else {
  document.write(`¡NO ENCONTRASTE EL NÚMERO!<br><br>Número random: ${random}<br>Números ingresados: ${array}<br>`);
}
*/

const cel = parseInt(prompt('Ingrese la tempratura en grados en grados Celsius'));
let conv = (cel*(9/5)+32).toFixed(1);
document.write(`Temperatura en grados celsius: ${cel}<br>Temperatura en grados celsius: ${conv}<br>`);
if (conv >= 14 && conv <= 32) {
  document.write(`<span style="color:skyblue">La temperatura es baja</span>`);
} else if (conv >= 32 && conv <= 68) {
  document.write('<span style="color:green">La temperatura es adecuada</span>');
} else if (conv >= 64 && conv <= 96) {
  document.write('<span style="color:red">La temperatura es alta</span>');
}
