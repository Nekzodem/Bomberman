var container = document.getElementById('container');
   function createbomb() {
                var bomb = document.createElement("div");
                bomb.setAttribute('class','bomb');  
                bomb.style.top = cartman.style.top;
                bomb.style.left = cartman.style.left;                                         
                container.appendChild(bomb);
                setTimeout("removebomb()",3000);
    } 
    function removebomb() {
        bomb.removeAttribute('class','bomb');
    } 
                

                //attendre 2 secondes et détruire
    

window.addEventListener("keydown", function(e){
    console.log("test");
    var key = e.keyCode || e.which;
    switch (key) {
           case 16:
           case 69:
               createbomb();
               break;  
    }
}, false);
    




/*

createBombBroadcast:function(team,name,x,y){ 
    console.log('socket create bomb'+team+' '+name+' x:'+x+' y:'+y); 
    socket.emit('Game.createBombBroadcast',team,name,x,y); 
}
 */