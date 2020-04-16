const title = document.querySelector('.title');
const nombre = document.getElementById('nombre');
document.write(`<b>Type de input sin modificar:</b> ${nombre.getAttribute('type')}<br><br>`);
nombre.setAttribute('type', 'number');
document.write(`<b>Type de input modificado:</b> ${nombre.getAttribute('type')}<br><br>`);
nombre.setAttribute('type', 'text');

//AGREGAR CLASES
title.classList.add('main-title', 'other-title');
console.log('Clase agregada');
console.log(title);
//QUITAR CLASES
title.classList.remove('other-title');
console.log('Clase removida');
console.log(title);
//EVALUAR SI UNA CLASE EXISTE
(title.classList.contains('title')) ? console.log('Tiene la clase title') : console.log('No tiene la clase title');
//REEMPLAZAR UNA CLASE
title.classList.remove('main-title');
title.classList.replace('title', 'main-title');
//ACCEDER AL VALUE DE UN INPUT
nombre.value='Hola Che';
document.write(`<b>Value del input:</b> ${nombre.value}`);
