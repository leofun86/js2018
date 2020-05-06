/*
    API IndexedDB
    - Es una manera de almacenar datos de manera persistente en el navegador.
    - Almacena pares LLAVE:VALOR.
      - Los valores pueden ser objetos con estructuras complejas, y las llaves pueden ser propiedades de esos objetos.
    - La API es mayormente asíncrona.
    - IndexedDB usa eventos DOM para notificar cuando los resultados están disponibles.
    - IndexedDB está orientada a objetos.

    CREACIÓN
    - Crear la base de datos a través del objeto indexedDB y el método open();
    - Comprobar si la base de datos existe o tiene que ser creada a través del método onupgradeneeded();
    - Crear almacén de objetos con el método createObjectStore();
    - Escuchar los eventos de éxito y de error con los métodos onsucces(); y onerror();

    MÉTODOS
    transaction([], ); para crear una transacción.
    createObjectStore(); para crear un almacén.
    objectStore; para abrir un almacén.
    add(); para agregar datos a la base de datos.
    put(); para actualizar o añadir datos a la base de datos.
    delete(); para borrar datos en la base de datos.
    getAll(); para obtener todos los registros de la base de datos.
    clear(); para borrar objetos del almacén.
    deleteDataBase; para borrar la base de datos.
    onBloquedU(); para bloquear la versión de la base de datos.
    createIndex(); para la creación de índices en la base de datos.
    OBJETO => IDBKeyRange  => para búsquedas en la base de datos.

    VER MÁS: https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API

    LIBRERÍA: https://dexie.org/
*/

//Constante para almacenar el acceso a indexedDB
const inDB = indexedDB;
const form = document.getElementById('form');
const tasks = document.getElementById('tasks');

if (indexedDB && form) {

  let db;
  const sql = indexedDB.open('tasklist', 1);

  sql.onsuccess = () => {
    db = sql.result;
    readData();
  };

  sql.onupgradeneeded = () => {
    db = sql.result;
    const objectStore = db.createObjectStore('tasks', {
      keyPath: 'taskTitle'
    });
  };

  sql.onerror = (error) => { console.log('ERROR: ', error); };

  //AGREGAR DATOS
  const addData = (data) => {
    //Crear transacción
      //Especificamos en qué almacen se hará y de qué modo
    const trans = db.transaction(['tasks'], 'readwrite');
    //Abrir almacen de datos
      //Realizamos la transacción configurada previamente
    const obStore = trans.objectStore('tasks');
    //Añadir datos
    const sql = obStore.add(data);
    //Si la sentencia funcionó, se ejecuta X rutina
    sql.onsuccess = () => { /*Leer datos*/ readData(); }
  };

  //ACTUALIZAR DATOS
    //Obtener datos
    const getData = (key) => {
      const trans = db.transaction(['tasks'], 'readwrite');
      const obStore = trans.objectStore('tasks');
      const sql = obStore.get(key);
      sql.onsuccess = () => {
        form.task.value = sql.result.taskTitle;
        form.priority.value = sql.result.taskPriority;
        form.button.dataset.action = 'update';
        form.button.textContent = 'Update Task';
      }
    }
    //Actualizar datos
    const upData = (data) => {
      const trans = db.transaction(['tasks'], 'readwrite');
      const obStore = trans.objectStore('tasks');
      //put() => Si el dato existe, lo actualiza o lo añade
      const sql = obStore.put(data);
      sql.onsuccess = () => {
        form.button.dataset.action='add';
        form.button.textContent='Add task';
        readData();
      }
    };

  //ELIMINAR DATOS
  const delData = (key) => {
    const trans = db.transaction(['tasks'], 'readwrite');
    const obStore = trans.objectStore('tasks');
    //put() => Si el dato existe, lo actualiza o lo añade
    const sql = obStore.delete(key);
    sql.onsuccess = () => { readData(); }
  };

  //LEER DATOS
  const readData = () => {
    //Crear transacción de sólo lectura => readonly se puede omitir porque es la manera por defecto
    const trans = db.transaction(['tasks'], 'readonly');
    //Abrir almacen de datos
    const obStore = trans.objectStore('tasks');
    //Crear cursor => Recorre cada uno de los objetos y devuelve los valores
      //openCursor() => Objeto que abre el cursor y permite leer la información
    const sql = obStore.openCursor();
    //Creación de fragmento que contendrá los datos de la base de datos
    const fragment = document.createDocumentFragment();
    //Ejecución de evento cuando la sentencia es exitosa
    sql.onsuccess = (e) => {
      //console.log(e.target);
      const cursor = e.target.result;
      if (cursor) {
        //console.log(cursor.key);
        const taskTitle = document.createElement('P');
        taskTitle.textContent = cursor.value.taskTitle;
        fragment.appendChild(taskTitle);

        const taskPriority = document.createElement('P');
        taskPriority.textContent = cursor.value.taskPriority;
        fragment.appendChild(taskPriority);

        const taskUpdate = document.createElement('BUTTON');
        taskUpdate.dataset.type = 'update';
        taskUpdate.dataset.key = cursor.key;
        taskUpdate.textContent='Update';
        fragment.appendChild(taskUpdate);

        const taskDelete = document.createElement('BUTTON');
        taskDelete.dataset.type = 'delete';
        taskDelete.dataset.key = cursor.key;
        taskDelete.textContent='Delete';
        fragment.appendChild(taskDelete);

        cursor.continue();
      } else {
        tasks.textContent='';
        tasks.appendChild(fragment);
      }
    }
  };

  //EJECUCIÓN DE FORMULARIO
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    //Objeto que se enviará a la base de datos
    const data = {
      taskTitle:e.target.task.value,
      taskPriority:e.target.priority.value
    };

    if (e.target.button.dataset.action == 'add') {
      addData(data);
    } else if (e.target.button.dataset.action == 'update') {
      upData(data);
      form.reset();
    }
  });

  tasks.addEventListener('click', (e) => {
    console.log(e.target.dataset.key);
    if (e.target.dataset.type=='update') { getData(e.target.dataset.key); }
    else if (e.target.dataset.type=='delete') { delData(e.target.dataset.key); }
  });

}
