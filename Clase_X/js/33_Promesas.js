//UNA PROMESA es un objeto que tiene dos callbacks internos
const users = [ { id:1, name:'Leo' }, { id:2, name:'Ana' }, { id:3, name:'Seba' } ];
const emails = [ { id:1, email:'leorecord@hotmail.com' }, { id:2, email:'anapsico@hotmail.com' } ];

const getUser = (id) => {
  const user = users.find(user => user.id == id);
  //Construcción de una promesa
  return promise = new Promise((resolve, reject) => {
    if (!user) reject('El usuario no existe')
    else resolve(user)
  })
};
const getEmail = (user) => {
  const email = emails.find(email => email.id==user.id);
  //Construcción de una promesa
  return promise = new Promise((resolve, reject) => {
    if (!email) reject(`${user.name} no tiene email`, email)
    else resolve(
      {
        id:user.id,
        name:user.name,
        mail:email.email
      })
  })
}
/*PRIMER RESOLUSIÓN
getUser(3)
  .then(user => getEmail(user))
  .then(resp => console.log(`Usuario: ${resp.name}\nCorreo: ${resp.mail}`))
  .catch(err=>console.log(err))
*/
//FORMA SIMPLIFICADA
getUser(4)
  .then(getEmail)
  .then(resp => console.log(`Usuario: ${resp.name}\nCorreo: ${resp.mail}`))
  .catch(console.log)
