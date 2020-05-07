const form = document.getElementById('form');
const txtResult = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(e.target.number1.value != '' && e.target.number1.value != '') {
    const number1 = parseInt(e.target.number1.value);
    //const number1 = e.target.number1.value;
    console.log(`${number1}: ${typeof(number1)}`);
    const number2 = parseInt(e.target.number2.value);
    //const number2 = e.target.number2.value  ;
    console.log(`${number2}: ${typeof(number2)}`);
    const result = number1+number2;
    console.log(`${result}: ${typeof(result)}`);
    txtResult.textContent=`${number1} + ${number2} = ${result}`;
  }
  e.target.reset();
});
