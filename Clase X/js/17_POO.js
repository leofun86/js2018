/*PROGRAMACIÓN ORIENTADA A OBJETOS
  -Es un paradigma (forma en que se soluciona un problema) de la programación que actualiza la forma programar anterior
CONCEPTOS FUNDAMENTALES:
  - CLase
  - Herencia
  - Objeto
  - Método
  - Evento
  - Etc
CLASES Y PROPIEDADES
  - Son plantillas que se utilizan para crear objetos iguales
  - Cuando se crea un objeto, a esa acción se la denomina INSTANCIAR un objeto
  - Necesitamos una FUNCIÓN CONSTRUCTORA. Se tiene que llamar CONSTRUCTOR y se ejecuta cada vez que creamos un objeto
MÉTODOS
  - Los objetos pueden tener funciones, a las que se les llama MÉTODOS
*/
//ESTRUCTURA
//Palabra class (reservada) y nombre de clase (recomendado que comience en matúscula, esto da a entender que es una clase)
class Persona {
  //Constructor (reservada) y los parámetros que tendrá el objeto
  constructor(nombre, apellido, edad, hijos) {
    this.nombre=nombre;//nombre del objeto = nombre del parámetro
    this.apellido=apellido;//apellido del objeto = apellido del parámetro
    this.edad=edad;//edad del objeto = edad del parámetro
    this.hijos=hijos;//edad del objeto = edad del parámetro
    this.datos=`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} años y mis hijos se llaman ${hijos.join(', ')}`;
    //La palabra THIS hace referencia al objeto que creamos
    //Se le pueden agregar más propiedades que no haya en el parámetro, pero siempre utilizando THIS para referenciar al objeto
  }
  //CREACIÓN DE UN MÉTODO
  saludar() {
    return `Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y mis hijos se llaman ${this.hijos.join(', ')}`;
  }
}
//CREAR UN OBJETO
const juan = new Persona('Juan', 'Perez', 23, ['Laura', 'Mauro']);
//Una vez creado, para acceder a sus propiedades o métodos utilizamos la nomenclatura del punto o buscando su propiedad en el objeto
document.write('---------------<br>EJEMPLO 1<br>---------------<br>');
document.write(juan.saludar()+'<br>');
juan.perros=['Fido', 'Fida'];
document.write(juan.nombre+'<br>'+juan.apellido+'<br>'+juan.edad+'<br>'+juan.hijos.join(', ')+'<br>'+juan.perros.join(', ')+'<br><br>');
document.write('---------------<br>EJEMPLO 2<br>---------------<br>');
document.write(juan.datos+'<br>');
