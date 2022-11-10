function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

let colection = [];

input.addEventListener('click', (event) => {
  const value = event.currentTarget.value;
  console.log(value);
  return value;
});

createBtn.addEventListener('click', () => {
  colection.push(value);
});

console.log(colection);

// не получается решить