/*
  API File
    Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.

    La interfaz más utilizada para interactuar con ella es FileReader
    https://developer.mozilla.org/es/docs/Web/API/FileReader
*/

const file = document.getElementById('file');
const img = document.getElementById('img');
const text = document.getElementById('text');
const images = document.getElementById('images');
const progress = document.getElementById('progress');

/* BARRA DE PROGRESO */
  /*DIV CON SPAN*/
  file.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    //Evento de progreso de carga
    fileReader.addEventListener('progress', (e) => {
      //Cálculo de progreso (regla de tres)
      progress.style.width=`${e.loaded * 100 / e.total}%`;
    })
    //Evento de finalización de carga
    fileReader.addEventListener('loadend', () => {
      progress.style.width='100%';
      text.textContent='¡Cargado correctamente!';
    });
  });

  /* DIV */
  //Raíz del archivo => Desde donde accederemos a la variable creada en CSS => --bar--width
  const root = document.documentElement;

  file.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    //Evento de progreso de carga
    fileReader.addEventListener('progress', (e) => {
      root.style.setProperty('--bar-width', `${e.loaded * 100 / e.total}%`);
    })
    //Evento de finalización de carga
    fileReader.addEventListener('loadend', () => {
      root.style.setProperty('--bar-width', '100%');
      text.textContent='¡Cargado correctamente!';
    });
  });

/* CARGAR DOCUMENTO DE TEXTO
file.addEventListener('change', (e) => {
  //Al ser un solo archivo el que se va a cargar, seleccionamos la provenencia del evento junto al Array files con index 0
  const file = e.target.files[0];
  //Creamos la interfaz FileReader para leer el contenido del archivo
  const fileReader = new FileReader();
  //Leemos el archivo como texto con la función readAsText()
  fileReader.readAsText(file);
  //Evento de carga de texto
  fileReader.addEventListener('load', (e) => {
    text.textContent=e.target.result;
  });
});
*/

/* CARGAR UNA IMAGEN
file.addEventListener('change', (e) => {
  //Al ser un solo archivo el que se va a cargar, seleccionamos la provenencia del evento junto al Array files con index 0
  const file = e.target.files[0];
  //Creamos la interfaz FileReader para leer el contenido del archivo
  const fileReader = new FileReader();
  //Leemos el archivo como imagen con la función readAsDataURL()
  fileReader.readAsDataURL(file);
  //Evento de carga de imagen
  fileReader.addEventListener('load', (e) => { img.setAttribute('src', e.target.result); });
});
*/

/* CARGA MÚLTIPLE DE IMAGENES
file.addEventListener('change', (e) => {
  //Array de elementos cargados
  const files = e.target.files;
  //Creación de fragmento
  const fragment = document.createDocumentFragment();
  //Bucle que recorre cada elemento cargado
  for (let file of files) {
    //Interfaz para leer archivo
    const fileReader = new FileReader();
    //Creación de elemento Imagen
    const elImg = document.createElement('IMG');
    //Estilos de imagen
    elImg.style.display='block';
    elImg.style.maxWidth='300px';
    //Establecer tipo de archivo a leer
    fileReader.readAsDataURL(file);
    //Evento para añadir SRC a cada imagen
    fileReader.addEventListener('load', (e) => {
      elImg.setAttribute('src', e.target.result);
    });
    //Agregar imagen al fragmento
    fragment.appendChild(elImg);
  }
  //Agregar fragmento a contenedor
  images.appendChild(fragment);
});
*/
