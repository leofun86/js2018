const alert = document.getElementById('alert')

addEventListener('online', (e) => {
  setAlert(1)
})

addEventListener('offline', (e) => {
  setAlert(0)
})

const setAlert = (status) => {
  alert.classList.remove('alert--online')
  alert.classList.remove('alert--offline')

  status === 1 ?
    setTimeout(() => {
      alert.classList.add('alert--online')
      alert.textContent='¡Yeah!, you´re online'
    }, 100) :
    setTimeout(() => {
      alert.classList.add('alert--offline')
      alert.textContent='¡Ups!, it seems you´re offline'
    }, 100)
}
