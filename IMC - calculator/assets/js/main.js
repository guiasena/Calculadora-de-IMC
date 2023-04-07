const form = document.querySelector('#form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputWeight = event.target.querySelector('#weight');
  const inputHeight = event.target.querySelector('#height');

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult('Invalid weight', false);
    return;
  }

  if (!height) {
    setResult('Invalid height', false);
    return;
  }

  const imc = getImc(weight, height);
  const levelImc = getLevelImc(imc);

  const msg = `Your IMC is ${imc} (${levelImc}).`;

  setResult(msg, true);
});

function getLevelImc (imc) {
  const level = ['Under weight', 'Normal weight', 'Overweight',
  'Grade 1 obesity', 'Grade 2 obesity', 'Grade 3 obesity'];

  if (imc >= 39.9) return level[5];
  if (imc >= 34.9) return level[4];
  if (imc >= 29.9) return level[3];
  if (imc >= 24.9) return level[2];
  if (imc >= 18.5) return level[1];
  if (imc < 18.5) return level[0];
}

function getImc (weight, height) {
  const imc = weight / height ** 2;
  return imc.toFixed(2);
}

function creatingP () {
  const p = document.createElement('p');
  return p;
}

function setResult (msg, isValid) {
  const result = document.querySelector('#result');
  result.innerHTML = '';

  const p = creatingP();

  if (isValid) {
    p.classList.add('valid');
  } else {
    p.classList.add('invalid');
  }

  p.innerHTML = msg;
  result.appendChild(p);
}