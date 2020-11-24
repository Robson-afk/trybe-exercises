
const textClick = document.getElementById('text');
const button = document.getElementById('btn');
let clickCount = 0;
button.addEventListener('click',() => textClick.innerText = clickCount += 1);