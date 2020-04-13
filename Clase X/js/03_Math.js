let val1 = -4;
let val2 = 4;
let val3 = 2.7;
let val4 = -5;

//abs: devuelve el valor absoluto de un número
document.write('abs: devuelve el valor absoluto de un número<br>'+Math.abs(val1)+'<br>');
//ceil: devuelve un número entero más grande, mayor o igual a un número
document.write('ceil: Devuelve un número entero más pequeño, mayor o igual a un número<br>'+Math.ceil(val3)+'<br>');
//floor: devuelve un número entero más pequeño, menor o igual a un número
document.write('floor: devuelve un número entero más grande, menor o igual a un número<br>'+Math.floor(val3)+'<br>');
//pow: devuelve un número elevado a una potencia
document.write('pow: devuelve un número elevado a una potencia<br>4<sup>2</sup> ==> '+Math.pow(val2, 2)+'<br>');
//random: genera un número pseudoaleatorio entre 0 y 1
document.write('random: genera un número ps *(eudoaleatorio (etre 0)y 1<br>'+Math.random()+'<br>');
document.write('Random entre 1 y 10 ==> '+Math.random()*10+'<br>');
document.write('Random con mínimo y máximo ==> '+Math.round(Math.random()*(10-5)+5));
document.write('<br>');
//round: devuelve un número redondeado
document.write('round: devuelve un número redondeado<br>');
document.write('Redondeo al número 2.3 ==> '+Math.round(val3)+'<br>');
//sign: devuelve el signo del número --> Positivo, Negativo o 0
document.write('Signo al valor positivo ==> '+Math.sign(val4=-3)+'<br>');
document.write('Signo al valor negativo ==> '+Math.sign(val4=3)+'<br>');
document.write('Signo al valor 0 ==> '+Math.sign(val4=0)+'<br>');
//sqrt: devuelve la raíz cuadrada de un número
document.write('Raíz cuadrada de 4 ==> '+Math.sqrt(val2)+'<br>');
//Extras
document.write('Extras<br>');
document.write('PI ==> '+Math.PI+'<br>');
document.write('Euler ==> '+Math.E+'<br>');
