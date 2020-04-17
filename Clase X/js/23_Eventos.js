//VER MÁS SOBRE EVENTOS: href="https://developer.mozilla.org/es/docs/Web/Events
//UN EVENTO es cualquier cosa que sucede en nuestro documento
  /*Tipos
    - El contenido se ha leído
    - El contenido se ha cargado
    - El usuario mueve el ratón
    - El usuario pulsa una tecla
    - La ventana se ha cerrado
    - Etc...
  */

const btn = document.getElementById('btn');
const box = document.getElementById('box');
const input = document.getElementById('input');
//box.style.background='green';
//EVENTOS DE RATÓN
  /*Click simple
    btn.addEventListener('click', () => console.log('Evento de click simple'));*/
  /*Doble click
    btn.addEventListener('dblclick', () => console.log('Evento de doble click'));*/
  /*Contacto con elemento*/
    box.addEventListener('mouseenter', () => {
      box.classList.replace('bgRed', 'bgGreen');
    });
    box.addEventListener('mouseleave', () => {
      box.classList.replace('bgGreen', 'bgRed');
    });
  /*MouseDown && MouseUp*/
  box.addEventListener('mousedown', () => console.log('Haz pulsado en la caja'));
  box.addEventListener('mouseup', () => console.log('Haz soltado el click de la caja'));
  /*MouseMove*/
  box.addEventListener('mousemove', () => console.log('Estás moviendo el mouse en la caja'));
//EVENTOS DE TECLADO
  /*Keydown*/
  input.addEventListener('keydown', () => console.log('Has pulsado una tecla'));
  /*KeyUp*/
  input.addEventListener('keyup', () => console.log('Has soltado una tecla'));
  /*KeyPress*/
  input.addEventListener('keypress', () => console.log('Estás pulsando una tecla'));
