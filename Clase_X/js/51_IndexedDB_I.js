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
    -
*/

//Constante para almacenar el acceso a indexedDB
const inDB = indexedDB;

if (indexedDB) {
  //Variable para almacenar la Base de datos.
  let db;
  const sql = indexedDB.open('tasklist', 1);
  //Crear la base de datos (esto se ejecuta luego de onupgradeneeded)
  sql.onsuccess = () => { db = sql.result; console.log('OPEN: ', db); };
  //Preguntar si existe la base de datos (esto se ejecuta antes de onsuccess)
  sql.onupgradeneeded = () => {
    db = sql.result; console.log('CREATE: ', db);
    const objectStore = db.createObjectStore('tasks_1');
    const objectStore2 = db.createObjectStore('tasks_2');
  };
  //Mostrar error
  sql.onerror = (error) => { console.log('ERROR: ', error); };
}
