//OBJETO ==> Estructura de datos que representa propiedades, valores y acciones que puede realizar el objeto
//Todos los objetos tienen propiedades/atributos y comportamientos/acciones representados por pares de clave (key) : valor (value)
//Para acceder a las PROPIEDADES de un OBJETO, se utiliza la nomenclatura del punto ==> persona.nombre

//EJEMPLOS
const persona = {
  nombre: 'Amapola',
  edad: 32,
  hijos: ['Jorge', 'Adela']
}

function primerLetraUpper(string) {
  let cadena = string.charAt(0).toUpperCase()+string.substring(1, string.length);
  return cadena;
}
for (let val in persona) {
  if (val == 'hijos') {
    persona[val]=persona[val].join(', ');
  }
  document.write(primerLetraUpper(val)+': '+persona[val]+'<br>');
}
document.write(`Hola ${persona.nombre}, tenés ${persona.edad} años y tus hijos se llaman ${persona.hijos}`);
