class Libro {
  constructor(titulo, autor, año, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
  }
  generoLibro() { return this.genero; }
  autores() { return this.autor; }
  infoLibro () {
    return `Libro: ${this.titulo}\nAutor: ${this.autor}\nAño: ${this.año}\nGénero: ${this.genero}`;
  }
}
let libros=[];

while (libros.length < 2) {
  let titulo = prompt('Ingrese el nombre del libro');
  while (titulo == "") {
    titulo = prompt('Ingrese el nombre del libro');
  }
  console.log('Título: '+titulo);
  let autor = prompt('Ingrese el autor del libro');
  while (autor == "") {
    autor = prompt('Ingrese el autor del libro');
  }
  console.log('Autor: '+autor);
  let año = prompt('Ingrese el año del libro');
  while (isNaN(año) || año.length != 4) {
    año = prompt('Ingrese el año del libro');
  }
  console.log('Año: '+año);
  let genero = prompt('Ingrese el género del libro');
  let val = 0;
  while (val != 1) {
    if (genero == 'aventuras' || genero == 'terror' || genero == 'fantasias') {
      val=1;
    } else {
      genero = prompt('Ingrese el género del libro');
    }
  }
  console.log('Genero: '+genero);
  libros.push(new Libro(titulo, autor, año, genero));
  titulo="";autor="";año=0;genero="";
}

const listaLibros = () => {
  document.write('LISTADO DE LIBROS<br><br>');
  document.write('<table><thead><tr><th>Libro</th><th>Autor</th><th>Año</th><th>Género</th></tr></thead><tbody>');
  for (let val in libros) {
    document.write('<tr>');
    for (let val2 in libros[val]) {
      document.write('<td>'+libros[val][val2]+'</td>');
    }
    document.write('</tr>');
  }
  document.write('</tr></tbody></table>');
}

const autorList = () => {
  document.write('<br>LISTADO DE AUTORES POR ÓRDEN ALFABÉTICO 1<br><br>');
  let autores = [];
  for (let val in libros) {
    autores[val]=libros[val]['autor'].toLowerCase();
  }
  document.write(autores.sort()+'<br>');
}
const autorList2 = () => {
  document.write('<br>LISTADO DE AUTORES POR ÓRDEN ALFABÉTICO 2<br><br>');
  let autores = [];
  for (const libro of libros) {
    autores.push(libro.autores().toLowerCase());
  }
  document.write(autores.sort()+'<br>');
}
const librosGenero = () => {
  document.write('<br>LISTADO DE LIBROS POR GÉNERO<br><br>');
  let gender = prompt('Ingrese un género');
  for (const libro of libros) {
    if (libro.generoLibro() == gender) {
      document.write(libro.infoLibro());
    }
  }
}

listaLibros();
autorList();
autorList2();
librosGenero();
