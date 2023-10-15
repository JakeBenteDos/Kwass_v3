var counter = 0;
function move(){
    
    counter++;
    for (let click = 0; click < 1; click++) {
        var position = ["up", "left"];
        var position = position[Math.floor(Math.random()*position.length)];
        
        const min = -140;
        const max = 140;

        const random = Math.floor(Math.random() * (max - min) + min);
        
        if(position == "left"){
            const hindi = document.getElementById("hindi").style.left = random + "px";
        }
        if(position == "up"){
            const hindi = document.getElementById("hindi").style.top = random + "px";
        }
        if(counter == 3){
            ifThree();
        }
        if(counter == 4){
            ifFour();
        }
        if(counter == 5){
            ifFive();
        }
        if(counter == 6){
            ifSix();
        }
        if(counter == 7){
            ifSeven();
        }
        if(counter == 8){
            ifEight();
        }
        if(counter == 9){
            ifNine();
        }
        if(counter == 2){
            ifTen();
        }
        console.log(position);
        console.log(random);
        console.log(counter);
    }
}


function ifThree(){
        var x = document.createElement("VIDEO");
      
        if (x.canPlayType("video/mp4")) {
          x.setAttribute("src","img/ifThree.mp4");
        }
        x.setAttribute("width", "240");
        x.setAttribute("height", "160");
        x.setAttribute("autoplay", "");
        // document.main.appendChild(x);
        document.getElementById('ifThreeVid').appendChild(x);
}
function ifFour(){
    
    document.getElementById("hand").style.display = "block";
    document.getElementById("hand").style.display = "block";
    var x = document.createElement("VIDEO");
  
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","img/ifFour.mp4");
    }
    x.setAttribute("width", "280");
    x.setAttribute("height", "200");
    x.setAttribute("autoplay", "");
    // document.main.appendChild(x);
    document.getElementById('ifFourVid').appendChild(x);
}
function ifFive(){
    var x = document.createElement("IMG");
  
    
    x.setAttribute("src","https://i.pinimg.com/564x/ac/9c/7c/ac9c7c22d93be9c24e8fadb63bd64b50.jpg");
    
    x.setAttribute("width", "180");
    x.setAttribute("height", "180");
    // document.main.appendChild(x);
    document.getElementById('ifFiveimg').appendChild(x);
    
}
function ifSix(){
    var x = document.createElement("IMG");
  
    
      x.setAttribute("src","https://i.pinimg.com/564x/dd/da/89/ddda894e15cf7b0c05230e084f18ba69.jpg");
    
    x.setAttribute("width", "170");
    x.setAttribute("height", "230");
    // document.main.appendChild(x);
    document.getElementById('ifSiximg').appendChild(x);
    
}
function ifSeven(){
    var x = document.createElement("IMG");
  
    
      x.setAttribute("src","https://i.pinimg.com/564x/08/5e/0b/085e0b5eeb045638cdc2f50620f08e8b.jpg");
    
    x.setAttribute("width", "200");
    x.setAttribute("height", "200");
    // document.main.appendChild(x);
    document.getElementById('ifSevenimg').appendChild(x);
    
}
function ifEight(){
    var x = document.createElement("VIDEO");
  
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src","img/eight.mp4");
    }
    x.setAttribute("width", "300");
    x.setAttribute("height", "220");
    x.setAttribute("autoplay", "");
    // document.main.appendChild(x);
    document.getElementById('ifEightVid').appendChild(x);
}
function ifNine(){
    var x = document.createElement("VIDEO");
      
    if (x.canPlayType("video/mp4")) {
        x.setAttribute("src","img/ulo.mp4");
    }
    x.setAttribute("width", "280");
    x.setAttribute("height", "200");
    x.setAttribute("autoplay", "");
    // document.main.appendChild(x);
    document.getElementById('ifNineVid').appendChild(x);
}
function ifTen(){
    var x = document.createElement("VIDEO");
      
    if (x.canPlayType("video/mp4")) {
        x.setAttribute("src","img/gwenchana.mp4");
    }
    x.setAttribute("width", "280");
    x.setAttribute("height", "200");
    x.setAttribute("autoplay", "");
    // document.main.appendChild(x);
    document.getElementById('ifTenVid').appendChild(x);
}