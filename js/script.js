const menuItems = document.querySelectorAll('.menu-item');

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', buttonClick);

}

function buttonClick() {
    if (!this.classList.contains('menu-item--active')) {
        document.body.style.backgroundColor = `#${this.getAttribute('data-background')}`;
        document.getElementById('colorHex').innerHTML = "HEX - " + `#${this.getAttribute('data-background')}`;
        document.getElementById("colorRGB").innerHTML = "RGB - " + document.body.style.backgroundColor;

    }
}
const colorTxt = document.getElementById('colortext');

function textchange() {
    document.body.style.backgroundColor = `#${colorTxt.value}`;
}



randomBtn.addEventListener('click', RandomClick);

function RandomClick() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    document.getElementById('colorHex').innerHTML = '#' + randomColor;
}


function hexToRgb(h) {
    return ['0x' + h[1] + h[2] | 0, '0x' + h[3] + h[4] | 0, '0x' + h[5] + h[6] | 0]
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}