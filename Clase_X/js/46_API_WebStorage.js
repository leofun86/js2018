/*
  API webStorage
    Los dos mecanismos en el almacenamiento web son los siguientes:

      sessionStorage => Mantiene un área de almacenamiento separado para cada origen que está disponible mientras dure la sessión de la página (mientras el navegador esté abierto, incluyendo recargas de página y restablecimientos).

      localStorage => Hace lo mismo, pero persiste incluso cuando el navegador se cierre y vuelva a abrir.

    Ambos funcionan con CLAVE:VALOR y tienen dos métodos fundamentales:
      setItem() => Para asignar una CLAVE:VALOR.
      getItem() => Para recibir como parámetro LA CLAVE de la que queremos obtener valor.
*/

const form = document.getElementById('form');
const keys = document.getElementById('keys');
const info = document.getElementById('infoValue');
const clear = document.getElementById('clear');
const remove = document.getElementById('remove');

console.log(keys.textContent)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.key.value != "") {
    //VARIABLE DE SESIÓN
    sessionStorage.setItem(form.key.value, form.value.value);
    //VARIABLE LOCAL
    localStorage.setItem(form.key.value, form.value.value);
    keys.innerHTML += `<option>${form.key.value}</option>`;
    form.reset();
  }
});

//MOSTRAR CONTENIDO DE UN SELECT POR INDEX MEDIANTE GET ITEM DE SESSION STORAGE
keys.addEventListener('change', () => {
  const val = sessionStorage.getItem(keys[keys.selectedIndex].textContent);
  info.textContent = val;
  console.log(val);
})

//LIMPIAR SESSION STORAGE
clear.addEventListener('click', () => {
  (keys.length > 1) ? sessionStorage.clear() : info.textContent = 'No hay nada que limpiar';
});

//QUITAR ITEM
remove.addEventListener('click', () => {
  if (keys.selectedIndex > 0) {
    sessionStorage.removeItem(keys[keys.selectedIndex].textContent)
    localStorage.removeItem(keys[keys.selectedIndex].textContent)
  } else {
    info.textContent = 'Error, inténtelo de nuevo';
  }
});

/*
const addOp = () => {
  const fragment = document.createDocumentFragment();
  const op = document.createElement('OPTION');
  op.setAttribute('value', form.value.value);
  op.textContent = form.value.value;
  fragment.appendChild(op);
  keys.appendChild(fragment);
}
*/
