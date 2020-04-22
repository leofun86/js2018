/*OBJETOS NATIVOS
  - window: Es el objeto global, de él descienden todos los objetos
  */
  //Ejemplo
  document.write('Hola Mundo<br>');
  /*Es equivalente a ==> */window.document.write('Hola Mundo<br><br>');
  /*
  - console: es el que contiene la consola del navegador
  VER MÁS: https://developer.mozilla.org/es/docs/Web/API/Console
    - console.table(): devuelve la información de objetos / arrays en formato de tabla
    - console.error(): devuelve un mensaje de error
  */
  //Ejemplo
  console.log('Hola Mundo');

  const person = {
    Nombre: 'Leandro Funes',
    Edad: 33,
    Dir: 'Anzani 2129 apt 001',
    Padre: 'Raul Funes',
    Madre: 'Elena Vilariño'
  }
  console.table(person);
  /*Location: objeto que contiene la barra de direcciones
  VER MÁS: https://developer.mozilla.org/es/docs/Web/API/Location
    - location.href
    - location.protocol
    - location.host
    - location.pathname
    - location.hash
    - location.reload()
  */
  //Ejemplo
  console.log(location.href);
  console.log(location.protocol);
  console.log(location.host);
  console.log(location.pathname);
  console.log(location.hash);
  console.log(location.reload);
  location.hash = 3;

  /*
  addEventListener('load', () => {
    switch(location.hash) {
      case '#1':
        document.write('Hola');
      break;
      case '#2':
        document.write('Chau');
      break;
      default: document.write('No hay hash');
    }
  });
  */
  //location.href = 'https://google.com';
  /*History: permite desplazamiento en el historial de una pestaña
    - history.back()
    - history.forward()
    - history.go(-n | n)*/
  document.write('<button type="button" id="btn">Back</button>');
  document.write('<button type="button" id="btn2">Forward</button>');
  const btn = document.getElementById('btn');
  const btn2 = document.getElementById('btn2');
  btn.addEventListener('click', () => {
    history.back();
  });
  btn2.addEventListener('click', () => {
    history.forward();
  });
  console.log('Historial: '+history.length);
  //console.table(history);
  /*Date: objeto que maneja fechas
  VER MÁS: https://www.w3schools.com/js/js_date_methods.asp
  */
  let date = new Date();
  console.log(date.getDate());

/*TIMERS
  */
document.write('<button id="btn3">TimeOut</button>');
const btn3 = document.getElementById('btn3');
const saludar = () => {
  let rand = Math.round(Math.random()*2000+1);
  console.log(`Número random: ${rand}`);
  setTimeout(() => alert('Hola'), rand);
}
let rand = Math.round(Math.random()*2000+1);
const saludar2 = setTimeout(() => {
  console.log(`Número random: ${rand}`);
  alert('Hola');
},3000);

btn3.addEventListener('click', () => {
  clearTimeout(saludar2);
  console.log(`Timeout desactivado`);
});

const puchi = setInterval(()=>{
  let randi = Math.round(Math.random()*50+1);
  console.log(randi)
}, 500);

document.write('<button id="btn4">Stop Interval</button>');
const btn4 = document.getElementById('btn4');
btn4.addEventListener('click', () => clearInterval(puchi));
