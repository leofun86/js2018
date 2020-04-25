/*
  Fetch API
    blob() => Binary Long OBject
*/
const btnImg = document.getElementById('btnImg');
const btnPdf = document.getElementById('btnPdf');

btnImg.addEventListener('click', () => {
  fetch('assets/img.jpg')
    .then(res=>res.blob())
    .then(img=> {
      document.getElementById('img').src=URL.createObjectURL(img);
    });
});
btnPdf.addEventListener('click', () => {
  fetch('assets/pdf.pdf')
    .then(res=>res.blob())
    .then(pdf=> {
      document.getElementById('pdf').href=URL.createObjectURL(pdf);
    });
});
