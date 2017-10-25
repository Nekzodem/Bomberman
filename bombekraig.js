var container = document.getElementById('container');
   function createbombKraig() {
                var bombKraig = document.createElement("div");
                bombKraig.setAttribute('class','bombKraig');  
                bombKraig.style.top = superkraig.style.top;
                bombKraig.style.left = superkraig.style.left;                                         
                container.appendChild(bombKraig); removeBombKraig(bombKraig);

}  

function removeBombKraig(bombKraig){
    setTimeout(function(){
        container.removeChild(bombKraig); explosionBomb(x,y);
    },2000);                                                                                                                
}

window.addEventListener("keydown", function(e){
    console.log("test");
    var key = e.keyCode || e.which;
    switch (key) {
           case 32:           
               createbombKraig();
               break;  
    }
}, false);