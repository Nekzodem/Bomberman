var superkraig = document.getElementById("superkraig"),
    kraig_top = parseInt(getComputedStyle(superkraig).top),
    kraig_left = parseInt(getComputedStyle(superkraig).left),
    kraig = getComputedStyle(superkraig).visibility;


superkraig.style.visibility = "visible";

function moveKraig (e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 90:
            kraig_top -= 50;
            if(kraig_top < 0) {
                kraig_top = 0;
                return;
            }
            superkraig.style.top = kraig_top + 'px';
            break;
        case 83:
            kraig_top += 50;
            if(kraig_top > 500) {
                kraig_top = 500;
                return;
            }
            superkraig.style.top = kraig_top + 'px';
            break;
        case 81:
            kraig_left -= 50;
            if(kraig_left < 0) {
                kraig_left = 0;
                return;
            }
            superkraig.style.left = kraig_left + 'px';
            break;
        case 68:
            kraig_left += 50;
            if(kraig_left > 500) {
                kraig_left = 500;
                return;
            }
            superkraig.style.left = kraig_left + 'px';
            break;
        default:
            break;
    }
}

window.addEventListener("keydown", function(e){
    moveKraig(e);
}, false);