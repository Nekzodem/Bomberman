var cartman = document.getElementById("cartman"),
    car_top = parseInt(getComputedStyle(cartman).top),
    car_left = parseInt(getComputedStyle(cartman).left); 

function moveCartman (e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 38:
            car_top -= 50;
            if(car_top < 0) {
                car_top = 0;
                return;
            }
            cartman.style.top = car_top + 'px';
            break;
        case 40:
            car_top += 50;
            if(car_top > 500) {
                car_top = 500;
                return;
            }
            cartman.style.top = car_top + 'px';
            break;
        case 37:
            car_left -= 50;
            if(car_left < 0) {
                car_left = 0;
                return;
            }
            cartman.style.left = car_left + 'px';
            break;
        case 39:
            car_left += 50;
            if(car_left > 500) {
                car_left = 500;
                return;
            }
            cartman.style.left = car_left + 'px';
            break;
        default:
            break;
    }
}

window.addEventListener("keydown", function(e){
    moveCartman(e);
}, false);
