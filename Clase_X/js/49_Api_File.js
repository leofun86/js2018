const pending = document.getElementById('pending_tasks');
const finished = document.getElementById('finished_tasks');

pending.addEventListener('dragstart', (e) => {
  //dataTransfer (firefox) => Objeto que obtiene toda la información del objeto que estamos arrastrando.
    //console.log(e.dataTransfer);
  //setData: Establece la información que queremos compartir
  e.dataTransfer.setData('text/plain', e.target.id);
  //getData: Establece la información que queremos obtener
    //console.log(e.dataTransfer.getData('text'));
});

pending.addEventListener('drag', (e) => { e.target.classList.add('active'); });
pending.addEventListener('dragend', (e) => { e.target.classList.remove('active'); });
finished.addEventListener('dragover', (e) => { e.preventDefault(); });
finished.addEventListener('drop', (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData('text'));
  element.classList.remove('active');
  finished.appendChild(pending.removeChild(element));
});
//TODO ESTO SE REPLICA DE IGUAL MANERA EN LA CAJA PENDING pero INVERSAMENTE
//Comienzo de drag => desde el evento establecemos con dataTransfer el dato que queremos setear, en este caso la id del elemento que draguearemos
finished.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', e.target.id); });
//Cuando empezamos a draguear, al elemento se le añadirá una clase
finished.addEventListener('drag', (e) => { e.target.classList.add('active'); });
//Cuando termine el dragueo, se le quitará la clase añadida al elemento
finished.addEventListener('dragend', (e) => { e.target.classList.remove('active'); });
//Evento necesario para que DROP funcione. Hay que desactivar el evento por defecto
pending.addEventListener('dragover', (e) => { e.preventDefault(); });
//En el evento DROP, deberemos obtener el elemento con la id para removerlo de la caja FINISHED y replicarlo en PENDING
pending.addEventListener('drop', (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData('text'));
  element.classList.remove('active');
  pending.appendChild(finished.removeChild(element));
});
