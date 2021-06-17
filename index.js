const burgerIcon = document.querySelector('.burger-icon');
const lineOne = document.getElementById('line1');
const lineTwo = document.getElementById('line2');
const lineThree = document.getElementById('line3');
const burgerMenu = document.getElementById('burger-menu');
const listElements = document.querySelectorAll('#burger-menu > li');

function HideBurgerMenu() {
   lineOne.classList.remove('line1--rotated');
   lineTwo.classList.remove('line2--hidden');
   lineThree.classList.remove('line3--rotated')
   burgerMenu.classList.add('options-container--hidden');
}

function ShowBurgerMenu() {
   lineOne.classList.add('line1--rotated');
   lineTwo.classList.add('line2--hidden');
   lineThree.classList.add('line3--rotated')
   burgerMenu.classList.remove('options-container--hidden');
}

function toggleClass() {
   if(lineOne.classList.contains('line1--rotated')) HideBurgerMenu();
   else ShowBurgerMenu();
}

for (const item of listElements) {
   item.addEventListener('click', HideBurgerMenu)
}