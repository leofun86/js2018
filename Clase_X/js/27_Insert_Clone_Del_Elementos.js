const title = document.getElementById('title');
const list = document.getElementById('list');
const list2 = document.getElementById('list2');
const parrafo = document.getElementById('parrafo');
const newEl = document.createElement('li');
newEl.textContent='Soy el nuevo elemento 1';


//INSERTAR EN POSICIÓN ESPECÍFICA
  //list.insertBefore(newEl, list.firstChild);
/*INSERTAR EN POSICIÓN ESPECÍFICA (avanzado)
  - parent.insertAdjacentElement(posición, elemento)
  - parent.insertAdjacentHTML(posición, html)
  - parent.insertAdjacentText(posición, texto)
  POSICIÓN
    - beforebegin: Antes de que empiece (hermano anterior)
    - afterbegin: Después de que comience (primer hijo)
    - beforeend: Antes de que acabe (último hijo)
    - afterend: Después de que acabe (hermano siguiente)
  */
  list.children[1].insertAdjacentElement('afterbegin', newEl);
  //Elemento HTML después de comenzar el elmento padre LIST
  list.insertAdjacentHTML('afterbegin', '<h4>Elemento HTML H1</h4>');
  //Elemento HTML antes de comenzar el elemento padre LIST
  list.insertAdjacentHTML('beforebegin', '<li>Elemento HTML LI</li>');
  //Texto después de comenzar el elemento padre P
  parrafo.insertAdjacentText('afterbegin', 'Elemento Texto');
/*REEMPLAZAR ELEMENTOS
  parent.replaceChild(newChild, oldChild);
  */
  newEl.textContent='Elemento Reemplazado';
  list.replaceChild(newEl, list.children[2]);

//NUEVAS MANERAS DE INSERCIÓN
  /*
  - parent.before(): Antes de que comience el elemento padre (hermano anterior)
  - parent.prepend(): Después de que empiece el elemento padre (primer hijo)
  - parent.append(): Antes de que acabe el elemento padre (último hijo)
  - parent.after(): Después de que termine el elemento padre (hermano siguiente)

  - child.replaceWith(newChild)
  */
  const newEl2 = document.createElement('li');
  const newEl3 = document.createElement('li');
  const newEl4 = document.createElement('li');
  const newEl5= document.createElement('li');
  const newEl6= document.createElement('li');
  newEl2.textContent='Soy el nuevo elemento 2';
  newEl3.textContent='Soy el nuevo elemento 3';
  newEl4.textContent='Soy el nuevo elemento 4';
  newEl5.textContent='Soy el nuevo elemento 5';
  newEl5.textContent='Soy el nuevo elemento 6';
  list2.before(newEl2);
  list2.children[1].prepend(newEl3);
  list2.append(newEl4);
  list2.firstChild.after(newEl5);
  document.write(list2.getElementsByTagName('li').length);

//CLONAR NODOS
  /*
  - element.cloneNode(true|false): Clona el nodo. Si le pasamos TRUE clona todo el elemento con los hijos, y si le pasamos FALSE clona el elemento sin los hijos
  */
  list2.after(list.cloneNode(true));
  list.children[1].prepend(list2.cloneNode(true));
//ELIMINAR NODOS
  /*
  - element.remove(): Elimina el nodo del DOM
  - element.removeChild(): Elimina el nodo hijo del DOM
  */
  list.children[1].remove();
  list2.removeChild(list2.children[0]);
