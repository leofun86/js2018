//Definimos la función como asíncrona con async antes de comenzar la estructura de la función flecha
const getName = async () => {
  //Devolvemos una promesa
  return new Promise((resolve, reject)=>{
    //Definimos un tiempo de demora en la respuesta del valor con setTimeout
    setTimeout(()=>{
      resolve('Leo Funes')
    }, 1500)
  })
}

//getName().then(res=>console.log(res))

//Para que la función getName() funcione, tenemos que definir la función como asíncrona escribiendo async previo a la estructura de la función saludo()
const saludo = async () => {
    //await hará 'esperar' el valor hasta que la promesa lo devuelva
    //await tiene que estar dentro de async
    const name = await getName();
    return `Hola ${name}`;
};

//saludo().then(res=>console.log(res));

////   ////   ////   ////   ////   ////   ////   ////   ////   ////   ////   ////

const users = [ { id:1, name:'Leo' }, { id:2, name:'Ana' }, { id:3, name:'Seba' } ];
const emails = [ { id:1, email:'leorecord@hotmail.com' }, { id:2, email:'anapsico@hotmail.com' } ];

//Al definir la función asíncrona, devuelve una promesa (se omite la construcción de la misma)
const getUser = async (id) => {
  const user = users.find(user => user.id == id);
  //return promise = new Promise((resolve, reject) => {
    //Throw new Error reemplaza REJECT
      //Es un objeto constructor que construye un objeto error y devuelve el mensaje del error
    if (!user) throw new Error('El usuario no existe')
    //return reemplaza RESOLVE
    else return user
  //})
};

const getEmail = async (user) => {
  const email = emails.find(email => email.id==user.id);
    if (!email) throw new Error(`${user.name} no tiene email`, email)
    else return ({ id:user.id, name:user.name, mail:email.email })
}

const getInfo = async (id) => {
  try {
    const user = await getUser(id)
    const res = await getEmail(user)
    return `${user.name} email is ${res.mail}`
  } catch (e) {
    console.log(e)
  }
}

getInfo(3).then(res=>console.log(res)).catch(res=>res)

/*
getUser(4)
  .then(getEmail)
  .then(resp => console.log(`Usuario: ${resp.name}\nCorreo: ${resp.mail}`))
  .catch(console.log)
*/
