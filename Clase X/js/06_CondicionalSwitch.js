//SWITCH se utiliza para tomar un camino basado en un parámetro

//Switch simple
/*
            let var = 1;
            switch (var) {
              case 1:
                Ejecuta sentencia
              break;
              case 2:
                Ejecuta sentencia
              break;
              case 3:
                Ejecuta sentencia
              break;
              default:
                Ejecuta sentencia
              break;
            }
*/
//Switch múltiple
/*
            let var = 1;
            switch (var) {
              case 1:
              case 2:
                Ejecuta sentencia
              break;
              case 3:
                Ejecuta sentencia
              break;
              default:
                Ejecuta sentencia
              break;
            }
*/

//Ejemplos
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
let var1 = 5;
let var2 = 2;

div1.innerHTML='CASO 1';
switch (var1) {
  case 1:
    div1.innerHTML+='<br>Número 1';
  break;
  case 2:
    div1.innerHTML+='<br>Número 2';
  break;
  case 3:
    div1.innerHTML+='<br>Número 3';
  break;
  case 4:
    div1.innerHTML+='<br>Número 4';
  break;
  case 5:
    div1.innerHTML+='<br>Número 5';
  break;
  default:
    div1.innerHTML+='<br>No hay número';
}

div2.innerHTML='<br><br>CASO 2';
switch (var2) {
  case 1:
  case 2:
    div2.innerHTML+='<br>Número entre 1 y 2';
  break;
  case 3:
    div2.innerHTML+='Número 3';
  break;
  case 4:
    div2.innerHTML+='Número 4';
  break;
  case 5:
    div2.innerHTML+='Número 5';
  break;
  default:
    div2.innerHTML+='No hay número';
}
