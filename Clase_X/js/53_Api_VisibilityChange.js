/*
  API Visibility Change
    Esta API permite que un AUDIO o VIDEO se detenga al cambiar de pestaña.
*/

const video = document.getElementById('video');

addEventListener('visibilitychange', () => document.visibilityState==='visible' ? video.play() : video.pause(); );
