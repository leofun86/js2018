/*
  API Match Media => https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia

    mql = window.matchMedia(mediaQueryString);

  - mql => viene de media query list, que es el objeto que se crea con el método matchMetia();

  - mediaQueryString => es cualquier media query válida en CSS
*/

const mql = matchMedia('(max-width:400px)');

const applyMatchMedia = (mql) => {
  mql.matches ?
    document.body.style.backgroundColor = 'red'
    :
    document.body.style.backgroundColor= 'green'
}

//Evento que despierta al redimensionar la pantalla de navegador
addEventListener('resize', () => applyMatchMedia(mql) );
//Evento que asegura la recarga con la función
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql));
