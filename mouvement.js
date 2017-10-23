var cartman = document.getElementById("cartman"),
    car_top = parseInt(getComputedStyle(cartman).top),
    car_left = parseInt(getComputedStyle(cartman).left); 

window.onkeydown = function (e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 38:
        case 90:
            car_top -= 50;
            cartman.style.top = car_top + 'px';
            break;
        case 40:
        case 83:
            car_top += 50;
            cartman.style.top = car_top + 'px';
            break;
        case 37:
        case 81:
            car_left -= 50;
            cartman.style.left = car_left + 'px';
            break;
        case 39:
        case 68:
            car_left += 50;
            cartman.style.left = car_left + 'px';
            break;
        default:
            break;
    }
}
