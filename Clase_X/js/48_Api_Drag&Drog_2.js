const pending = document.getElementById('pending_tasks');
const finished = document.getElementById('finished_tasks');

pending.addEventListener('dragstart', (e) => {
    //console.log('TARGET');
    //console.log(e.target);
  //dataTransfer (firefox) => Objeto que obtiene toda la información del objeto que estamos arrastrando.
    //console.log('DATA TRANSFER');
    //console.log(e.dataTransfer);
  //setData: Establece la información que queremos compartir
  e.dataTransfer.setData('text/plain', e.target.id);
  //getData: Establece la información que queremos obtener
    //console.log('GET DATA');
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
  //console.log(finished.childNodes);
});

finished.addEventListener('dragstart', (e) => {
  e.dataTransfer.setData('text/plain', e.target.id);
});
finished.addEventListener('drag', (e) => { e.target.classList.add('active'); });
finished.addEventListener('dragend', (e) => { e.target.classList.remove('active'); });
pending.addEventListener('dragover', (e) => { e.preventDefault(); });
pending.addEventListener('drop', (e) => {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData('text'));
  element.classList.remove('active');
  pending.appendChild(finished.removeChild(element));
    //console.log(finished.childNodes);
});
