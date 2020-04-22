//PROTOCOLO HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto

const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.addEventListener('load', (data) => {
    data = JSON.parse(data.target.response);
    //document.write('<table id="tabla"><tr><th>ID</th><th>Nombre</th></tr>');
    const lista = document.getElementById('lista');
    for (const userInfo of data) {
      //document.write('<tr>');
      //document.write(`<td>${userInfo.id}</td><td>${userInfo.name}</td>`);
      const listItem = document.createElement('LI');
      listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
      lista.appendChild(listItem);
      //document.write('</tr>');
    }
    //document.write('</table>');

  });
  xhr.send();
});
