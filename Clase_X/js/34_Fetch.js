/*FETCH API => Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
  - También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
  - Trabaja por defecto con el método GET.
  - ESTÁ BASADO EN PROMESAS => Por lo cual tiene un response y reject internos.
     RESPONSE tiene varios métodos:
        - arrayBuffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
        - blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamnte.
        - clone(): Crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable direferente.
        - formData(): Se utiliza para leer los objetos formData.
        - json(): Convierte los archivos json en un objeto de JavaScript.
        - text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8
 */
const btn = document.getElementById('btn');
const list = document.getElementById('list');
//res = response = respuesta
btn.addEventListener('click', () => {
  /*COMPROBACIÓN DE COMPATIBILIDAD DE FETCH CON EL NAVEGADOR
  if (window.fetch != undefined) console.log('Fetch es compatible');
  else console.log('Fetch no es compatible');*/
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.ok ? Promise.resolve(res) : Promise.reject(res))
  .then(res=>res.json())
  .then(res=> {
    const fragment = document.createDocumentFragment();
    for (const val of res) {
      const li = document.createElement('LI');
      li.textContent=`Nombre: ${val.name} - Email: ${val.email}`;
      fragment.appendChild(li);
    }
    list.appendChild(fragment);
  })
});
