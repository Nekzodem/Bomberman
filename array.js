var container = document.getElementById("container");

var grille = [
    [0,0,4,4,4,4,4,4,0,0],
    [0,5,4,5,4,4,5,4,5,0],
    [4,4,0,4,4,4,4,0,4,4],
    [4,5,4,5,0,4,5,4,5,4],
    [4,4,4,0,2,4,4,4,4,4],
    [4,4,4,4,4,2,0,4,4,4],
    [4,5,4,5,4,0,5,4,5,4],
    [4,4,0,4,4,4,4,0,4,4],
    [0,5,4,5,4,4,5,4,5,0],
    [2,0,4,4,4,4,4,4,0,2]
]



for(var i=0; i < grille.length; i++) {

    for(var j=0; j<grille[i].length; j++) {

        var loc = parseInt(grille[i][j]);

        container.innerHTML = container.innerHTML + '<div id="l'+i+'c'+j+'" class="tuiles bloc'+loc+'"></div>';


        var element = document.getElementById("l"+i+"c"+j);
        element.style.top = i*50+"px";
        element.style.left = j*50+"px";

        if(loc == 0) {
            element.style.backgroundColor = 'white';
        } else if(loc == 1) {
            element.style.backgroundColor = 'white'
        } else if(loc == 2) {
            element.style.backgroundColor = 'red';
        } else if(loc == 3) {
            element.style.backgroundColor = 'green';
        } else if(loc == 4) {
            element.style.backgroundColor = 'grey';
        } else if(loc == 5) {
            element.style.backgroundColor = 'black';
        } else if(loc == 6) {
            element.style.backgroundColor = 'pink';
        } 

    }


}

i = j = 0;
var o = 0,
    k = 450;

function deplacement(e) {
    var key = e.keyCode || e.which;
    switch (key) {
        case 38:        
        if(i-1 < 0) {return false;}   
            if(grille[i-1][j] != 9 && grille[i-1][j] != 5 && grille[i-1][j] != 6) {
                i--;
                moveCartman(i,j);
                cartman.style.backgroundImage = url("");
                console.log (i,j);
            }
            else {
                //rien
            }
            break;
        case 40:
        if(i+1 > 9) {return false;}
            if(grille[i+1][j] != 9 && grille[i+1][j] != 5 && grille[i+1][j] != 6) {
                i++;
                moveCartman(i,j);
                cartman.style.backgroundImage = url("");
                console.log (i,j);
            }
            else {
                //rien
            }
            break;
        case 37:
        if(j-1 < 0) {return false;}
            if(grille[i][j-1] != 9 && grille[i][j-1] != 5 && grille[i][j-1] != 6) {
                j--
                moveCartman(i,j);
                cartman.style.backgroundImage = url("");
                console.log (i,j);
            }
            else {
                //rien
            }
            break;
        case 39:
        if(j+1 > 9) {return false;}
            if(grille[i][j+1] != 9 && grille[i][j+1] != 5 && grille[i][j+1] != 6) {
                j++;
                moveCartman(i,j);
                cartman.style.backgroundImage = url("");
                console.log (i,j);
            }
            else {
                //rien
            }
            break;
        case 90:
        if(o-1 < 0) {return false;}
            if(grille[o-1][k] !=9 && grille[o-1][k] != 5 && grille[o-1][k] != 6) {
                o--;
                moveKraig(o,k);
                kraig.style.backgroundImage = url("");
            }
            else {
                //rien
            }
            break;
        case 83:
        if(o+1 > 9) {return false;}
            if(grille[o+1][k] !=9 && grille[o+1][k] != 5 && grille[o+1][k] != 6) {
                o++;
                moveKraig(o,k);
                kraig.style.backgroundImage = url("");
            }
            else {
                //rien
            }
            break;
        case 81:
        if(k-1 < 0) {return false;}
            if(grille[o][k-1] !=9 && grille[o][k-1] != 5 && grille[o][k-1] != 6) {
                k--;
                moveKraig(o,k);
                kraig.style.backgroundImage = url("");
            }
            else {
                //rien
            }
            break;
        case 68:
        if(k+1 > 9) {return false;}
            if(grille[o][k+1] !=9 && grille[o][k+1] != 5 && grille[o][k+1] != 6) {
                k++;
                moveKraig(o,k);
                kraig.style.backgroundImage = url("");
            }
            else {
                //rien
            }
            break;
        default:
            break;

    }
}

// CARTMAN 

var cartman = document.getElementById("cartman"),
    car_top = parseInt(getComputedStyle(cartman).top),
    car_left = parseInt(getComputedStyle(cartman).left); 

function moveCartman(i,j) {
    car_top = i*50;
    car_left = j*50;

    cartman.style.top = car_top + "px";
    cartman.style.left = car_left + "px";
}

// KRAIG 

var superkraig = document.getElementById("superkraig"),
    kraig_top = parseInt(getComputedStyle(superkraig).top),
    kraig_left = parseInt(getComputedStyle(superkraig).left),
    kraig = getComputedStyle(superkraig).visibility; 

function moveCartman(i,j) {
    kraig_top = o*50;
    kraig_left = k*50;

    superkraig.style.top = kraig_top + "px";
    superkraig.style.left = kraig_left + "px";
}


// ENNEMI

var ennemi = document.getElementById("ennemi"),
ennemi_top = parseInt(getComputedStyle(ennemi).top),
ennemi_left = parseInt(getComputedStyle(ennemi).left); 

var x = y = 9;

setInterval(function(){
    danse(x,y);
}, 2000);
function danse(x,y) {
    var quart = Math.floor((Math.random() * 4) + 1);

    if (x-1 < 0){return false;}
        if (quart == 1 && grille[x][y] == 2 && grille[x-1][y] != 3  && grille[x-1][y] != 5 && grille[x-1][y] != 6) {
        x--;
        moveEnnemi(x,y);
    } if (x+1 > 9){return false;}
        if (quart == 2 && grille[x][y] == 2 && grille[x+1][y] != 3  && grille[x+1][y] != 5 && grille[x+1][y] != 6) {
        x++;
        moveEnnemi(x,y);
    } if (y-1 < 0){return false;}
        if (quart == 3 && grille[x][y] == 2 && grille[x][y-1] != 3  && grille[x][y-1] != 5 && grille[x][y-1] != 6) {
        y--;
        moveEnnemi(x,y);
    } if (y+1 > 9){return false;}
        if(quart == 4 && grille[x][y] == 2 && grille[x][y+1] != 3  && grille[x][y+1] != 5 && grille[x][y+1] != 6) {
        y++;
        moveEnnemi(x,y);
    }
}

function moveEnnemi(x,y) {
    ennemi_top = x*50;
    ennemi_left = y*50;


    ennemi.style.top = ennemi_top + "px";
    ennemi.style.left = ennemi_left + "px";
}






window.addEventListener("keydown", function(e){deplacement(e)}, false);