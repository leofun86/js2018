//CALLBACK es una función que se ejecuta a través de otra función
//Los CALLBACK´s no son asíncronos (se ejecutan por orden)
 /*
 const getUser = (id, cb) => {
   const user =  {
     name:'Leo',
     id:id
   };
   if (id == 2) {
     cb('User not exist', user);
   } else {
     cb(null, user);
   }
}

getUser(1, (err, user) => {
  if (err) return console.log(err);
  console.log(`User name is ${user.name}`);
});
 */
const users = [
  {
    id:1,
    name:'Leo'
  },{
    id:2,
    name:'Ana'
  },{
    id:3,
    name:'Seba'
  }
];

const emails = [
  {
    id:1,
    email:'leorecord@hotmail.com'
  },{
    id:2,
    email:'anapsico@hotmail.com'
  }
];

const getUser = (id, cb) => {
  const user = users.find(user => user.id == id);
  if (!user) cb(`El usuario no existe`, user)
  else cb(null, user)
};

const getEmail = (user, cb) => {
  const email = emails.find(email => email.id==user.id);
  if (!email) cb(`${user.name} no tiene email`, email)
  else cb(null, {
    id:user.id,
    name:user.name,
    mail:email.email
  })
}

getUser(3, (err, user) => {
  if (err) return console.log(err);
  console.log(`${user.name} existe`);
  getEmail(user, (err, resp) => {
    if (err) return console.log(err);
    console.log(resp);
  });
});
