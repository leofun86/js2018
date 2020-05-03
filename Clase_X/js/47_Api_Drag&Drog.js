/*
  API Drag and Drop

    Existen dos partes principales para esta API: El objecto a arrastrar y la zona donde vamos a dejarlo.

    Para controlar estas acciones tenemos varios eventos de cada una de las partes

    OBJETO A ARRASTRAR
      dragstart: Se dispara al comenzar a arrastrar.
      drag: Se dispara mientras arrastramos.
      dragend: Se dispara cuando soltamos el objeto.

    ZONA DE DESTINO
      dragenter: Se dispara cuando el objeto entra en la zona de destino.
      dragover: Se dispara cuando el objeto se mueve sobre la zona de destino.
      drop: Se dispara cuando soltamos el objeto en la zona de destino.
      dragleave: Se dispara cuando el objeto sale de la zona de destino.
*/

const smile = document.getElementById('smile');
const drop = document.getElementById('drop');

smile.addEventListener('dragstart', () => {
  console.log('Drag Start');
});

smile.addEventListener('dragend', () => {
  console.log('Drag End');
});

drop.addEventListener('dragenter', () => {
  console.log('Drag Enter');
})

drop.addEventListener('dragover', (e) => {
  e.preventDefault();
  console.log('Drag Over');
})

drop.addEventListener('drop', (e) => {
  e.preventDefault();
  console.log('Drop');
})

drop.addEventListener('dragleave', () => {
  console.log('Drag Leave');
})
