/* https://developer.mozilla.org/es/docs/WebAPI/Using_geolocation */

const btnGetLoc = document.getElementById('getLocation');

btnGetLoc.addEventListener('click', () => {
  const geoLoc = navigator.geolocation;
  geoLoc.getCurrentPosition(getPosition, error, options);
  console.log(geoLoc);
});

const options = {
  //En caso de que el dispositivo tenga más opciones de geolocalización (móvil => GPS) las utilizará.
  enabledHightAccuracy: true,
  //Tiempo que establecemos para que nos devuelva la posición
  timeout: 5000,
  //La duración que queremos que tenga información en caché
  maximunAge: 0
}

const getPosition = (position) => {
  console.log(position);
}

const error = (error) => { console.log(error); }
