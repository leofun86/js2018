//Se utiliza cuando una condición es booleana
/*
  (condición) ? true : false
  (condición) ?
    (primera sentencia,
    segunda sentencia)
*/

//Ejemplos
let var1 = 3;

//Sentencia simple
(var1%2 == 0) ? document.write('Es par') : document.write('Es impar');
//Sentencia múltiple
(var1%2 == 0) ?
  (
    document.write('<br><br>SENTENCIAS MÚLTIPLES<br>Es<br>'),
    document.write('un<br>'),
    document.write('número<br>'),
    document.write('par')
  )
    :
  (
    document.write('<br><br>SENTENCIAS MÚLTIPLES<br>Es<br>'),
    document.write('un<br>'),
    document.write('número<br>'),
    document.write('impar<br>')
  );
