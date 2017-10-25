function explosionBomb(x,y) {
    var tileTopOrigin = x;
    var tileLeftOrigin = y;
    //createjs.Sound.play('bombAudio');
    console.log(topBombposition);

    var tileUp = x-50;
    var tileDown = x+50;
    var tileRight = y+50;
    var tileLeft = y-50;
    
    var divUp = document.createElement("div");
    divUp.className = "boum";
    divUp.style.top = tileUp + "px";
    divUp.style.left = tileLeftOrigin + "px";
    container.appendChild(divUp);
    
    var divDown = document.createElement("div");
    divDown.className = "boum";
    divDown.style.top = tileDown + "px";
    divDown.style.left = tileLeftOrigin + "px";
    container.appendChild(divDown);

    var divRight = document.createElement("div");
    divRight.className = "boum";
    divRight.style.top = tileTopOrigin + "px";
    divRight.style.left = tileRight + "px";
    container.appendChild(divRight);   
    
    var divLeft = document.createElement("div");
    divLeft.className = "boum";
    divLeft.style.top = tileTopOrigin + "px";
    divLeft.style.left = tileLeft + "px";
    container.appendChild(divLeft);
    
   
    var divCenter = document.createElement("div");
    divCenter.className = "boum";
    divCenter.style.top = tileTopOrigin + "px";
    divCenter.style.left = tileLeftOrigin + "px";
    container.appendChild(divCenter);

}