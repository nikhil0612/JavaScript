# Projects related to DOM
## project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project 2
```javascript
const form = document.querySelector('form');
// this use case will give empty values
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
    // if (bmi < 18.6) {
    //   results.innerHTML = `<span>${bmi} Underweight</span>`;
    // } else if (bmi >= 18.6 && bmi <= 24.9) {
    //   results.innerHTML = `<span>${bmi} Normalweight</span>`;
    // } else if (bmi > 24.9) {
    //   results.innerHTML = `<span>${bmi} Overweight</span>`;
    // }
  }
});
```

## Project 3
```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector("#clock"); // both are same

// setInterval(funciton(){}, miliseconds) it has fixed syntax so remember it
// we can run a method continuously with a specific interval of time in miliseconds

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```