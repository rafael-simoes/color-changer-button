const menuItems = document.querySelectorAll('.menu-item');
const hexColor = document.getElementById('hexColor');
const colorR = document.getElementById('textR');
const colorG = document.getElementById('textG');
const colorB = document.getElementById('textB');

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', buttonClick);

}

function buttonClick() {
    if (!this.classList.contains('menu-item--active')) {
        
        document.body.style.backgroundColor = `#${this.getAttribute('data-background')}`;
        document.getElementById('colorHex').innerHTML = `#${this.getAttribute('data-background')}`;
        document.getElementById("colorRGB").innerHTML = hexToRgb(document.getElementById('colorHex').innerHTML);
    
    }
}


function hexChange() {
    document.body.style.backgroundColor = `#${hexColor.value}`;
    document.getElementById("colorHex").innerHTML = '#'+hexColor.value;
    document.getElementById("colorRGB").innerHTML = hexToRgb('#'+hexColor.value);
    var rgbSplit = document.getElementById("colorRGB").innerHTML.split(',');
    colorR.value=rgbSplit[0];
    colorG.value=rgbSplit[1];
    colorB.value=rgbSplit[2];

}


function RGBChange() {
    document.body.style.backgroundColor = rgbToHex(parseInt(colorR.value),parseInt(colorG.value),parseInt(colorB.value));
    document.getElementById("colorHex").innerHTML = rgbToHex(parseInt(colorR.value),parseInt(colorG.value),parseInt(colorB.value));
    document.getElementById("colorRGB").innerHTML = colorR.value + ','+ colorG.value + ',' + colorB.value;
    hexColor.value = rgbToHex(parseInt(colorR.value),parseInt(colorG.value),parseInt(colorB.value));
}


randomBtn.addEventListener('click', RandomClick);

function RandomClick() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
    document.getElementById('colorHex').innerHTML = '#' + randomColor;
    document.getElementById("colorRGB").innerHTML = hexToRgb('#'+randomColor);
    hexColor.value='#'+randomColor;
    var rgbSplit = document.getElementById("colorRGB").innerHTML.split(',');
    colorR.value=rgbSplit[0];
    colorG.value=rgbSplit[1];
    colorB.value=rgbSplit[2];
}


function hexToRgb(h) {
    return ['0x' + h[1] + h[2] | 0, '0x' + h[3] + h[4] | 0, '0x' + h[5] + h[6] | 0]
}

function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}