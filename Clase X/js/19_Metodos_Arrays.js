
let palabra = 'hola MUNDO';
let array = Array.from(palabra);
console.log(array);
for (let val in array) {
  if (array[val] == " ") {
    array.splice(val,1);
  }
  if (val != 0) {
    array[val]=array[val].toLowerCase();
  } else {
    array[val]=array[val].toUpperCase();
  }
}
document.write(`${array.join(' - ')}<br>`);
//SORT: ordena de menor a mayor los valores del arrays
let letters = ['a', 'n', 't', 'r', 's', 'b', 'Z', 'X'];
for (let val in letters) {letters[val]=letters[val].toLowerCase();}
document.write(`${letters.sort().join(' - ')}<br>`);
let numbers = [1, 4, 4, 8, 7, 2, 9, 10, 7, 46];
document.write(`${numbers.sort((a,b) => a-b)}<br>`);
/*REPRESENTACIÓN DE LA FUNCIÓN DE ORDENAMIENTO NUMÉRICO DE MAYOR A MENOR Y VICEVERSA
function menorMayor (a, b) {
 if (a-b < 0) return -1;
 if (a-b > 0) return 1;
 if (a-b == 0) return 0;
}
function mayorMenor (b, a) {
  if (b-a < 0) return -1;
  if (b-a > 0) return 1;
  if (b-a == 0) return 0;
}
*/
//FOREACH: para cada elemento devuelve una instrucción
const numberos = [12, 24, 46, 94, 48];
numberos.forEach((num, i)=>document.write(`El número ${num} está en la posición ${i}<br>`));
//SOME: evalúa si alguno de los elementos cumplen la condición
const numberas = [12, 41, 23, 65, 98, 1];
document.write(numberas[0]+'<br>');
document.write(numberas.some(hola => hola.toString().length > 1)+'<br>');
//MAP: permite aplicar una acción a cada valor de un array y almacenarlo en uno nuevo
const numeres = [1, 2, 3, 4, 5];
const arry = numeres.map(num => num * 2);
document.write('Array original: '+numeres.join(', ')+'<br>Array on map: '+arry.join(', ')+'<br>');
//FILTER: Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
const nn = numeres.filter(num => num != 2);
document.write(`Array sin filter: ${numeres}<br>Array nuevo con filter: ${nn}<br>`);
//REDUCE: reduce todos los valores de un array a un único valor
document.write(`Array sin reduce: ${numberos}<br>Array con reduce (cálculo de media): ${(numberos.reduce((a, b)=>(a+b)).toFixed(2))/numberos.length}<br>`);
  //Aplicación práctica
  const users = [
    {
      nombre: 'user1',
      online: true
    },
    {
      nombre: 'user2',
      online: true
    },
    {
      nombre: 'user3',
      online: false
    },
    {
      nombre: 'user4',
      online: true
    },
    {
      nombre: 'user5',
      online: false
    },
    {
      nombre: 'user6',
      online: true
    }
  ];
let off = 0;
let on =0;
const userOnline = users.reduce((cont, user) => {
  if (user.online) {cont++;on++;};
  if (!user.online) off++;
  return cont;
},0);
console.log(`Online: ${on}`);
console.log(`Offline: ${off}`);
document.write(`Hay ${userOnline} usuarios conectados y ${off} usuarios desconectados`);
