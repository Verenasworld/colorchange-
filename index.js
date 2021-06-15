// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>change Color on Click</h1>`;

const bg = document.getElementById('bg');

function randomColor() {
  return Math.floor(Math.random() * 255);
}
bg.addEventListener('click', () => {
  bg.style.backgroundColor =
    'rgba(' + randomColor() + ',' + randomColor() + ',' + randomColor() + ')';
});
