//CALLBACK es una función que se ejecuta a través de otra función
//Los CALLBACK´s no son asíncronos (se ejecutan por orden)
 const getUser = (id, cb) => {
   const user =  {
     name:'Leo',
     id:id
   };
