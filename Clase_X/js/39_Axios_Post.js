const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
  const newPost = {
    title: 'A new post',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    author: 'Leo Funes',
    userId: 1
  }
  axios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: newPost
  })
    .then(res=>console.log(`Título: ${res.data.title}\nAutor: ${res.data.author}\nContenido: ${res.data.body}`))
    .catch(err=>console.log(err))
});
