//Estructura que permite almacenar varios datos y agruparlos
//Se pueden llenar con cualquier  tipo de dato válido de JS y deben ir separados por comas
//Pueden mezclarse tipos de datos en un solo array, pero no es recomendable
//Se declaran con llaves cuadradas o corchetes
//Pueden declararse vacíos o con datos ya establecidos

let numeros=[1, 2, 3, 4, 5];

document.write(numeros+'<br>');

for (i=0; i < numeros.length; i++) {
  if (numeros[i]%2 == 0) {
    document.write(numeros[i]+'<br>');
  }
}
