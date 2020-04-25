const btn = document.getElementById('btn');
const list = document.getElementById('list');
console.log(list.hasChildNodes())
/*
btn.addEventListener('click', () => {
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
*/

btn.addEventListener('click', () => {
  axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users'
  })
  .then(res => {
    if (list.hasChildNodes()) {
      for (let i=list.children.length; i > 0; i--) { list.children[i-1].remove();}
    }
    const fragment = document.createDocumentFragment();
    for (const val of res.data) {
      const li = document.createElement('LI');
      li.textContent=`Nombre: ${val.name} - Email: ${val.email}`;
      fragment.appendChild(li);
    }
    list.appendChild(fragment);
  })
  .catch(err => console.log(err))
});
