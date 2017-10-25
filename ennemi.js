/*
var ennemi = document.getElementById("ennemi"),
    ennemi_top = parseInt(getComputedStyle(ennemi).top),
    ennemi_left = parseInt(getComputedStyle(ennemi).left); 


setInterval(danse, 2000);
function danse() {
    var quart = Math.floor((Math.random() * 4) + 1);

    if (quart == 1) {
        ennemi_top -= 50;
        if(ennemi_top < 0) {
            ennemi_top = 0;
            return;
        }
        ennemi.style.top = ennemi_top + 'px';
    } else if (quart == 2) {
        ennemi_top += 50;
        if(ennemi_top > 500) {
            ennemi_top = 500;
            return;
        }
        ennemi.style.top = ennemi_top + 'px';
    } else if (quart == 3) {
        ennemi_left -= 50;
        if(ennemi_left < 0) {
            ennemi_left = 0;
            return;
        }
        ennemi.style.left = ennemi_left + 'px';
    } else if (quart == 4) {
        ennemi_left += 50;
        if(ennemi_left > 500) {
            ennemi_left = 500;
            return;
        }
        ennemi.style.left = ennemi_left + 'px';
    }
}
*/