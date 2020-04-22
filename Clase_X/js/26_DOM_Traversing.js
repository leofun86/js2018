//DOM TRAVERSING: Recorrer DOM - Sirve para situarnos en un nodo y saber movernos ascendente y descendentemente en función del nodo que utilizamos como referencia
const parent = document.getElementById('parent');
const h1 = document.getElementById('title');
/*PADRES
  - parentNode: Devuelve el nodo padre (que puede no ser un elemento).
  - parentElement: Devuelve el nodo elemento padre.
  */
  console.log('Elemento padre con "parentNode"');
  console.log(parent.parentNode);
  console.log('Elemento padre con "parentElement"');
  console.log(parent.parentNode);
/*HIJOS
  - childNodes: Devuelve todos los nodos hijos
  - children: Devuelve todos los nodos elementos hijos
  - firstChild: Devuelve el primer nodo hijo
  - firstElementChild: Devuelve el primer nodo elemento hijo
  - lastChild: Devuelve el último nodo hijo
  - lastElementChild: Devuelve el último nodo elemento hijo
  - hasChildNodes(): Devuelve TRUE si el nodo tiene hijos y FALSE si no los tiene
  */
  console.log('Elementos hijos con "childNodes"');
  console.log(parent.childNodes);
  console.log('Nodos elementos hijos con "children"');
  console.log(parent.children);
  console.log('Primer nodo hijo con "firstChild"');
  console.log(parent.firstChild);
  console.log('Primer nodo elemento hijo con "firstElementChild"');
  console.log(parent.firstElementChild);
  console.log('Último nodo hijo con "lastChild"');
  console.log(parent.lastChild);
  console.log('Último nodo elemento hijo con "lastElementChild"');
  console.log(parent.lastElementChild);
  console.log(`Evaluación de si tiene o no nodos hijos con "hasChildNodes" ==> ${title.hasChildNodes()} ==> ${parent.hasChildNodes()}`);
  /*HERMANOS: siblings (Nodo al mismo nivel (no tiene que ser del mismo tipo))
    - nextSibling: Devuelve el siguiente nodo hermano
    - nextElementSibling: Devuelve el siguiente nodo elemento hermano
    - previousSibling: Devuelve el nodo hermano previo
    - previousElementSibling: Devuelve el nodo elemento hermano previo
  */
  console.log('Nodo hermano siguiente con "nextSibling"');
  console.log(parent.nextSibling);
  console.log('Elemento nodo hermano siguiente con "nextElementSibling"');
  console.log(parent.parentElement.nextElementSibling);
  console.log('Nodo hermano previo con "previousSibling"');
  console.log(parent.previousSibling);
  console.log('Elemento nodo hermano previo con "previousElementSibling"');
  console.log(parent.parentElement.previousElementSibling);
