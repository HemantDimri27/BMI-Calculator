const form = document.querySelector('form');
// outside listner, this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();                                                             // restrict default action of form

  const height = parseInt(document.querySelector('#height').value);               // parse into Int 
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {                                 // use isNaN() instead of val == NaN , latest recommeded approach
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);                      // tofixed(2)  ,  fixed 2 digits after decimal

    if(bmi<18.6){
      results.innerHTML = `Your BMI is: <span>${bmi}</span>, means Under Weight`;               // using span is good practice
    } else if (bmi>18.6 && bmi<24.9){
      results.innerHTML = `Your BMI is: <span>${bmi}</span>, means Normal Range`;
    } else if (bmi>24.9){
      results.innerHTML = `Your BMI is: <span>${bmi}</span>, means Overweight`;
    }


    //show the result
    // results.innerHTML = `<span>${bmi}</span>`;                                            // using span is good practice
  }
});