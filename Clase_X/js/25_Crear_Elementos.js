const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Sábado', 'Domingo'];
const title = document.getElementById('title');
const daylist = document.getElementById('daylist');
const dayselect = document.getElementById('dayselect');

/*
//CREAR ELEMENTO
const itemList = document.createElement('LI');
  //AÑADIR CONTENIDO AL ELEMENTO CREADO
  itemList.textContent='Lunes';

daylist.appendChild(itemList);
*/

const fragment = document.createDocumentFragment();
days.forEach(n=> {
  const day = document.createElement('LI');
  day.textContent=n;
  fragment.appendChild(day);
});
daylist.appendChild(fragment);
const fragment2 = document.createDocumentFragment();
days.forEach(n=> {
  const day = document.createElement('OPTION');
  day.setAttribute('value', n.toLowerCase());
  day.textContent=n;
  fragment2.appendChild(day);
});
console.log(fragment2);
dayselect.appendChild(fragment2);
