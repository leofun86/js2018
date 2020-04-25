const form = document.getElementById('form'); const name = document.getElementById('name');
const email = document.getElementById('email'); const gender = document.getElementById('gender');
const terms = document.getElementById('terms'); const btnSubmit = document.getElementById('btnSubmit');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});
const formIsValid = { name:false, email:false, gender:false, terms:false }

//
name.addEventListener('change', (e) => {if (e.target.value.trim().length > 0) { formIsValid.name=true; }});

email.addEventListener('change', (e) => {if (e.target.value.trim().length > 0) { formIsValid.email=true; }});

gender.addEventListener('change', (e) => {if (e.target.checked == true) { formIsValid.gender=true; }});

terms.addEventListener('change', (e) => {
  if (e.target.checked == true) formIsValid.terms = e.target.checked;
  e.target.checked ? btnSubmit.removeAttribute('disabled') : btnSubmit.setAttribute('disabled', true);
});

const validateForm = () => {
  const formValues = Object.values(formIsValid);
  const valid = formValues.findIndex(value => value == false);
  if (valid == -1) form.submit(); else alert('Formulario invalido');
}
