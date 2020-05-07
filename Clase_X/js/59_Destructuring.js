/*
  Asignación desestructurante => https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

  La desestructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

const person = { name: 'Leo', age: 32, mail: 'leorecord@hotmail.com' }
/*
  FORMA TRADICIONAL DE ACCEDER A DATOS
    const name = person.name;
    const age = person.age;
    const email = person.mail;
    console.log(name, age, email);

  DESTRUCTURING
    const {name, age, mail} = person;
    console.log(name, age, mail);

    const {name:nombre, age:edad, mail:correo} = person;
    console.log(nombre, edad, correo);
*/

const numbers = [ 1, 2, 3, 4 ]

/*
  FORMA TRADICIONAL
    const pos1 = numbers[0];
    console.log(pos1);

  DESTRUCTURING
    const [pos1, pos2, pos3, pos4] = numbers;
    console.log(pos1, pos4);

    const printPerson = ({name}) => {
      console.log(name);
    }
    printPerson(person);
*/

const getUsers = async () => {
  const { data:users } = await axios.get('https://jsonplaceholder.typicode.com/users');

  console.log(users);
}

getUsers();
