/*Acceder a un elemento por su ID
    document | element .getElementById('id')*/
/*Acceder al primer elemento que coincida con el selector CSS
    document | element .querySelector('selectorCSS');*/
/*Acceder a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
    document | element .querySelectorAll('selectorCSS');*/

//Seleccionar ID de un elemento
const title = document.getElementById('title');
document.write(`<b>Elemento DOM sin modificar:</b> ${title.textContent}<br>`);
title.textContent = 'Hola';
document.write(`<b>Elemento DOM modificado:</b> ${title.textContent}<br><br>`);

const paragraph = document.querySelector('.paragraph:nth-child(1)');
const b = paragraph.querySelector('b');
//MANERA CONCATENADA: document.querySelector('.paragraph:nth-child(1)').querySelector('span');
document.write(`<b>Contenido de P:</b> ${paragraph.textContent}<br><b>Contenido de SPAN:</b> ${b.textContent}<br><br>`);
//Convertir párrafo a azul
const paraAll = document.querySelectorAll('.paragraph');
document.write(paraAll.forEach(p=>p.style.color='blue'));
//Convertir párrafo a rojo
const arrayParagraph = Array.from(document.querySelectorAll('.paragraph'));
document.write(arrayParagraph.map(p=> p.style.color='red'));
