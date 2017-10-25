var container = document.getElementById("container");

var grille = [
    [1,0,4,4,4,4,4,4,0,1],
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

       /* if(loc == 0) {
            element.style.backgroundColor = 'white';
        } else if(loc == 1) {
            element.style.backgroundColor = 'blue';
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
