const file = document.getElementById('file');
const dropZone = document.getElementById('dropZone');
const btnSubmit = document.getElementById('upBtn');
const progress = document.getElementById('progress');
const txt = document.getElementById('dropZoneText');

btnSubmit.disabled=true;
dropZone.innerHTML=`
  <i class="fas fa-file-upload"></i>
  <p class="dropZoneText" id="dropZoneText">Drop file to upload file</p>
`;
file.style.display='none';
dropZone.addEventListener('click', () => file.click());
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('dropZoneHover');
});
dropZone.addEventListener('dragleave', () => {
  dropZone.classList.remove('dropZoneHover');
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  file.files = e.dataTransfer.files;
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file.files[0]);
  fileReader.addEventListener('progress', (e) => {
    progress.style.width=`${e.loaded * 100 / e.total}%`;
  });
  fileReader.addEventListener('loadend', (e) => {
    progress.style.width='100%';
    btnSubmit.style.background='green';
    btnSubmit.style.color='white';
    btnSubmit.disabled=false;
    dropZone.innerHTML=`
      <i class="fas fa-check-circle"></i>
      <p class="dropZoneText" id="dropZoneText">¡Load completed!</p>
    `;
  });
});

file.addEventListener('change', (e) => {
  console.log(file.files);
});
