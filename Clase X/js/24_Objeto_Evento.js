const form = document.getElementById('form');
const input = document.getElementById('input');
const btn = document.getElementById('button');
const p = document.querySelector('p');

//p.isContentEditable=true;
//p.style.color='green';
//addEventListener('click', (e) => console.log(e.target));

p.addEventListener('click', (e) => {
  let txt = prompt('Ingrese texto');
  p.textContent=txt;
});

const gallery = document.getElementById('gallery');
gallery.addEventListener('click', (e) => {console.log(e.target.style.background='red')});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log();
  if (input.value!="") {
    p.textContent=input.value;
  }
});

const link = document.getElementById('link');
link.addEventListener('click', (e) => e.preventDefault());
//FORZAR EVENTO
input.addEventListener('click', () => {
  input.value='Evento iniciado';
});
input.click();
