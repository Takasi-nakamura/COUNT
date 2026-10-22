const reset = document.querySelector('.reset');
const p = document.querySelector('.p');
const btna = document.querySelector('.btna');
const btnb = document.querySelector('.btnb');

let value = 0

function up() {
  p.textContent = value;
}

btna.addEventListener('click', () => {
  value += 1
  up();
});

btnb.addEventListener('click', () => {
  if (value > 0) {
    value -= 1
  }
  up();
});

reset.addEventListener('click', () => {
  value = 0
  up();
});