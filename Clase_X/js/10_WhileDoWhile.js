//Es un bucle indeterminado ya que no sabemos cuántas veces se repetirá durante su ejecución
// Se compone de dos partes: Una es el CÓDIGO A EJECUTAR, y la otra es la CONDICIÓN DE SALIDA

//Ejemplos
let nombre = prompt('Ingrese su nombre');
let pass = null;

while (nombre != 'leo') {
  nombre = prompt('Incorrecto: ingrese el nombre de nuevo');
}

let i=0;
do {
  if (i != 0) {
    pass = prompt('Error: ingrese la pass nuevamente');
  } else {
    pass = prompt('Ingrese la pass');
    if (pass != 1234) {
      i=1;
    }
  }
} while (pass != 1234);

document.write('¡LO LOGRASTE!');
