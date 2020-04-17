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
/*
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
*/

/*
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
meses.forEach((n,i) => document.write(`<b>Mes ${i+1}:</b> ${n}<br>`));
const valores = [true, 5, false, "hola", "adiós", 2];
const bool=[],num=[],str=[];
valores.forEach(n => {
  if (typeof(n) == 'boolean') {bool.push(n)}
  if (typeof(n) == 'number') {num.push(n)}
  if (typeof(n) == 'string') {str.push(n)}
});
document.write('<br><br>'+bool.join(', '));
document.write('<br><br>'+num.join(', '));
document.write('<br><br>'+str.join(', '));
*/

const deps = document.getElementById('deps');
const locs = document.getElementById('locs');

const depLocs = {
  "Seleccionar":[],
	"Artigas":["Artigas","Bella Unión"],
	"Canelones":["Canelones","Santa Lucía"],
	"Montevideo":["Montevideo"],
	"Salto":["Daymán","Arapey"]
};

const elm = document.createDocumentFragment();
const elm2 = document.createDocumentFragment();

const localidades = () => {
  for (let i=locs.options.length; i >=0;i--) {locs.remove(i)}
  for (let l of depLocs[deps.value.charAt(0).toUpperCase()+deps.value.substring(1)]) {
    const loc = document.createElement('OPTION');
    loc.textContent=l;
    loc.setAttribute('value', l);
    elm2.appendChild(loc);
  }
  locs.appendChild(elm2);
}

const departamentos = () => {
  for (let d in depLocs) {
    const dep = document.createElement('OPTION');
    dep.textContent=d;
    dep.setAttribute('value', d.toLowerCase());
    elm.appendChild(dep);
  }
}

departamentos();
deps.appendChild(elm);
localidades();
deps.addEventListener('click', localidades);
