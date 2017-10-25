var container = document.getElementById('container');
   function createbomb() {
                var bomb = document.createElement("div");
                bomb.setAttribute('class','bomb');  
                bomb.style.top = cartman.style.top;
                bomb.style.left = cartman.style.left;                                         
                container.appendChild(bomb); removeBomb(bomb);

}  
                      
function removeBomb(bomb){
    setTimeout(function(){
        container.removeChild(bomb); explosionBomb(x,y);
    },2000);                                                                                                                
}

window.addEventListener("keydown", function(e){
    console.log("test");
    var key = e.keyCode || e.which;
    switch (key) {
           case 16:           
               createbomb();
               break;  
    }
}, false);

