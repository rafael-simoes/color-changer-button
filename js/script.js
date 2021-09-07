const menuItems = document.querySelectorAll('.menu-item');

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', buttonClick);

}

function buttonClick() {
    if (!this.classList.contains('menu-item--active')) {
        document.body.style.backgroundColor = `#${this.getAttribute('data-background')}`;
    }
}
const colorTxt = document.getElementById('colortext');

function textchange() {
    document.body.style.backgroundColor = `#${colorTxt.value}`;
}



randomBtn.addEventListener('click', RandomClick);

function RandomClick(){var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    document.getElementById('colorHex').innerHTML = '#'+randomColor;
}