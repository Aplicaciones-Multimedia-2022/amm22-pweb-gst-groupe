window.onload = function () {
  var nav = document.getElementById("main");
  tabs = nav.getElementsByTagName("span");
  sections = document.getElementsByTagName("section");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", activateTab);
    tabs[1].addEventListener("click", startGame,);
  
  }
  
}


function activateTab() {
  for (var i = 0; i < tabs.length; i++) {
    var tabClasses = tabs[i].classList;
    var sectionClasses = sections[i].classList;
    if (tabs[i] == this) { //Visualize clicked tab
      tabClasses.add("currentab");
      sectionClasses.add("current");
    } else { //Remove previous active tab
      tabClasses.remove("currentab");
      sectionClasses.remove("current");
    }
  }
}

//Aqui empieza el javascript del Juego
var myGamePiece;
var myScore;
var myObstacles = [];
var muro=[];
var muro1=[];
var muro2=[];
var muro3=[];
var muro4=[];




function startGame() {
    myGamePiece = new component(50, 50, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/hogsqueel_alldir_x2_and_actual.webp%20(2).gif", 359, 250, "image");
    myScore = new component("30px", "Consolas", "black", 350, 40, "text");
    myGameArea.start();
}


var myGameArea = {
  start: function () {
    var mycanvas = document.getElementById("myCanvas");
    mycanvas.style.background=  "url(https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/cesped1.jpg)";
    mycanvas.width = 900;
    mycanvas.height = 500;
    this.frameNo = 0;
    clearInterval(this.interval);

    this.interval = setInterval(updateGameArea, 1);
    window.addEventListener('keydown', function (e) {
      myGameArea.key = e.keyCode;
    })
    window.addEventListener('keyup', function (e) {
      myGameArea.key = false;
    })
  },
  clear: function () {
    var mycanvas = document.getElementById("myCanvas");
var context = mycanvas.getContext('2d');
    context.clearRect(0, 0, mycanvas.width, mycanvas.height);
  },
  stop: function () {
    clearInterval(this.interval);

  }
}


function component(width, height, color, x, y, type) {
  
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    var mycanvas = document.getElementById("myCanvas");
    var context = mycanvas.getContext('2d');
    context.globalCompositeOperation = "destination-over";
    if (type == "image") {
      context.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
    } else if (this.type == "text") {
      context.font = this.width + " " + this.height;
      context.fillStyle = color;
      context.fillText(this.text, this.x, this.y);
    }
    else {
      context.fillStyle = color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  this.crashWith = function (otherobj) {
    var myleft = this.x;
    var myright = this.x + (this.width);
    var mytop = this.y;
    var mybottom = this.y + (this.height);
    var otherleft = otherobj.x;
    var otherright = otherobj.x + (otherobj.width);
    var othertop = otherobj.y;
    var otherbottom = otherobj.y + (otherobj.height);
    var crash = true;
    if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
      crash = false;
    }
    return crash;
  }
  
}

function updateGameArea() {

  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i]) && everyinterval(200)) {
      return;
    }
  }
 
  


  myGameArea.clear();
  myGameArea.frameNo += 1;
  myScore.text = "SCORE: " + myGameArea.frameNo;
  myScore.update();
  myGamePiece.newPos();
  myGamePiece.update();
  clearmove()
  if (myGameArea.key && myGameArea.key == 37) { moveleft() }
  if (myGameArea.key && myGameArea.key == 39) { moveright() }
  if (myGameArea.key && myGameArea.key == 38) { moveup() }
  if (myGameArea.key && myGameArea.key == 40) { movedown() }
  if (myGameArea.frameNo == 1 || everyinterval(5)) {
    xobstacle1 = Math.floor(Math.random() * 880);
    yobstacle1 = Math.floor(Math.random() * 480);
    muro.push(new component(40, 40, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/pngwing.com%20(2).png", 100, yobstacle1,"image"));
    
  }
  for (i = 0; i <6; i += 1) {
    muro[i].update();

  }
  if (myGameArea.frameNo == 1 || everyinterval(5)) {
    xobstacle1 = Math.floor(Math.random() * 880);
    yobstacle1 = Math.floor(Math.random() * 480);
    muro1.push(new component(40, 40, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/pngwing.com%20(2).png", 250, yobstacle1,"image"));
    
  }
  for (i = 0; i <6; i += 1) {
    muro1[i].update();

  }

  if (myGameArea.frameNo == 1 || everyinterval(5)) {
    xobstacle1 = Math.floor(Math.random() * 880);
    yobstacle1 = Math.floor(Math.random() * 480);
    muro2.push(new component(40, 40, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/pngwing.com%20(2).png", 450, yobstacle1,"image"));
    
  }
  for (i = 0; i <6; i += 1) {
    muro2[i].update();

  }

  if (myGameArea.frameNo == 1 || everyinterval(5)) {
    xobstacle1 = Math.floor(Math.random() * 880);
    yobstacle1 = Math.floor(Math.random() * 480);
    muro3.push(new component(40, 40, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/pngwing.com%20(2).png", 650, yobstacle1,"image"));
    
  }
  for (i = 0; i <6; i += 1) {
    muro3[i].update();
  }
    if (myGameArea.frameNo == 1 || everyinterval(5)) {
      xobstacle1 = Math.floor(Math.random() * 880);
      yobstacle1 = Math.floor(Math.random() * 480);
      muro4.push(new component(40, 40, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/pngwing.com%20(2).png", 800, yobstacle1,"image"));
    }
    for (i = 0; i <6; i += 1) {
      muro4[i].update();
  
    
  }
  if (myGameArea.frameNo == 1 || everyinterval(110)) {
    xobstacle = Math.floor(Math.random() * 150);
    yobstacle = Math.floor(Math.random() * 150);
    myObstacles.push(new component(40, 40, "https://cdn-icons-png.flaticon.com/512/32/32128.png",myGamePiece.x+xobstacle,myGamePiece.y+ yobstacle, "image"));
    

  }
 
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].update();
    myObstacles = myObstacles.slice(i);

  }
 

}

function everyinterval(n) {
  if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
  return false;
}


function moveup() {

  myGamePiece = new component(50, 50, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/hogsqueel_alldir_x2_and_actual.webp%20(1).gif", myGamePiece.x, myGamePiece.y, "image");
  for (i = 0; i < muro1.length; i ++) {
    if ((myGamePiece.crashWith(muro[0])) || (myGamePiece.crashWith(muro[1])) || (myGamePiece.crashWith(muro[2])) || (myGamePiece.crashWith(muro[3])) || (myGamePiece.crashWith(muro[4])) || (myGamePiece.crashWith(muro[5]))
    || (myGamePiece.crashWith(muro1[0])) || (myGamePiece.crashWith(muro1[1])) || (myGamePiece.crashWith(muro1[2])) || (myGamePiece.crashWith(muro1[3])) || (myGamePiece.crashWith(muro1[4])) || (myGamePiece.crashWith(muro1[5])) 
    || (myGamePiece.crashWith(muro2[0])) || (myGamePiece.crashWith(muro2[1])) || (myGamePiece.crashWith(muro2[2])) || (myGamePiece.crashWith(muro2[3])) || (myGamePiece.crashWith(muro2[4])) || (myGamePiece.crashWith(muro2[5]))
    || (myGamePiece.crashWith(muro3[0])) || (myGamePiece.crashWith(muro3[1])) || (myGamePiece.crashWith(muro3[2])) || (myGamePiece.crashWith(muro3[3])) || (myGamePiece.crashWith(muro3[4])) || (myGamePiece.crashWith(muro3[5]))
    || (myGamePiece.crashWith(muro4[0])) || (myGamePiece.crashWith(muro4[1])) || (myGamePiece.crashWith(muro4[2])) || (myGamePiece.crashWith(muro4[3])) || (myGamePiece.crashWith(muro4[4])) || (myGamePiece.crashWith(muro4[5]))) {
    break;    

}else  myGamePiece.speedY = -1;

  }
  

}

function movedown() {
  myGamePiece = new component(50, 50, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/hogsqueel_alldir_x2_and_actual.webp%20(2).gif", myGamePiece.x, myGamePiece.y, "image");
  for (i = 0; i < muro1.length; i ++) {
    if ((myGamePiece.crashWith(muro[i])) || (myGamePiece.crashWith(muro[1])) || (myGamePiece.crashWith(muro[2])) || (myGamePiece.crashWith(muro[3])) || (myGamePiece.crashWith(muro[4])) || (myGamePiece.crashWith(muro[5]))
    || (myGamePiece.crashWith(muro1[0])) || (myGamePiece.crashWith(muro1[1])) || (myGamePiece.crashWith(muro1[2])) || (myGamePiece.crashWith(muro1[3])) || (myGamePiece.crashWith(muro1[4])) || (myGamePiece.crashWith(muro1[5])) 
    || (myGamePiece.crashWith(muro2[0])) || (myGamePiece.crashWith(muro2[1])) || (myGamePiece.crashWith(muro2[2])) || (myGamePiece.crashWith(muro2[3])) || (myGamePiece.crashWith(muro2[4])) || (myGamePiece.crashWith(muro2[5]))
    || (myGamePiece.crashWith(muro3[0])) || (myGamePiece.crashWith(muro3[1])) || (myGamePiece.crashWith(muro3[2])) || (myGamePiece.crashWith(muro3[3])) || (myGamePiece.crashWith(muro3[4])) || (myGamePiece.crashWith(muro3[5]))
    || (myGamePiece.crashWith(muro4[0])) || (myGamePiece.crashWith(muro4[1])) || (myGamePiece.crashWith(muro4[2])) || (myGamePiece.crashWith(muro4[3])) || (myGamePiece.crashWith(muro4[4])) || (myGamePiece.crashWith(muro4[5]))) {
    break;    

}else   myGamePiece.speedY = 1;

  }
  
 
}

function moveleft() {
  myGamePiece = new component(50, 50, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/hogsqueel_alldir_x2_and_actual.webp.gif", myGamePiece.x, myGamePiece.y, "image");
  
    
  for (i = 0; i < muro1.length; i ++) {
    if ((myGamePiece.crashWith(muro[0])) || (myGamePiece.crashWith(muro[1])) || (myGamePiece.crashWith(muro[2])) || (myGamePiece.crashWith(muro[3])) || (myGamePiece.crashWith(muro[4])) || (myGamePiece.crashWith(muro[5]))
    || (myGamePiece.crashWith(muro1[0])) || (myGamePiece.crashWith(muro1[1])) || (myGamePiece.crashWith(muro1[2])) || (myGamePiece.crashWith(muro1[3])) || (myGamePiece.crashWith(muro1[4])) || (myGamePiece.crashWith(muro1[5])) 
    || (myGamePiece.crashWith(muro2[0])) || (myGamePiece.crashWith(muro2[1])) || (myGamePiece.crashWith(muro2[2])) || (myGamePiece.crashWith(muro2[3])) || (myGamePiece.crashWith(muro2[4])) || (myGamePiece.crashWith(muro2[5]))
    || (myGamePiece.crashWith(muro3[0])) || (myGamePiece.crashWith(muro3[1])) || (myGamePiece.crashWith(muro3[2])) || (myGamePiece.crashWith(muro3[3])) || (myGamePiece.crashWith(muro3[4])) || (myGamePiece.crashWith(muro3[5]))
    || (myGamePiece.crashWith(muro4[0])) || (myGamePiece.crashWith(muro4[1])) || (myGamePiece.crashWith(muro4[2])) || (myGamePiece.crashWith(muro4[3])) || (myGamePiece.crashWith(muro4[4])) || (myGamePiece.crashWith(muro4[5]))) {
    break;    

}else  myGamePiece.speedX = -1;

  }

}

function moveright() {
  myGamePiece = new component(50, 50, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/hogsqueel_alldir_x2_and_actual.webp%20(3).gif", myGamePiece.x, myGamePiece.y, "image");
  for (i = 0; i < muro1.length; i ++) {
    if ((myGamePiece.crashWith(muro[0])) || (myGamePiece.crashWith(muro[1])) || (myGamePiece.crashWith(muro[2])) || (myGamePiece.crashWith(muro[3])) || (myGamePiece.crashWith(muro[4])) || (myGamePiece.crashWith(muro[5]))
    || (myGamePiece.crashWith(muro1[0])) || (myGamePiece.crashWith(muro1[1])) || (myGamePiece.crashWith(muro1[2])) || (myGamePiece.crashWith(muro1[3])) || (myGamePiece.crashWith(muro1[4])) || (myGamePiece.crashWith(muro1[5])) 
    || (myGamePiece.crashWith(muro2[0])) || (myGamePiece.crashWith(muro2[1])) || (myGamePiece.crashWith(muro2[2])) || (myGamePiece.crashWith(muro2[3])) || (myGamePiece.crashWith(muro2[4])) || (myGamePiece.crashWith(muro2[5]))
    || (myGamePiece.crashWith(muro3[0])) || (myGamePiece.crashWith(muro3[1])) || (myGamePiece.crashWith(muro3[2])) || (myGamePiece.crashWith(muro3[3])) || (myGamePiece.crashWith(muro3[4])) || (myGamePiece.crashWith(muro3[5]))
    || (myGamePiece.crashWith(muro4[0])) || (myGamePiece.crashWith(muro4[1])) || (myGamePiece.crashWith(muro4[2])) || (myGamePiece.crashWith(muro4[3])) || (myGamePiece.crashWith(muro4[4])) || (myGamePiece.crashWith(muro4[5]))) {
    break;    

}else   myGamePiece.speedX = 1;

  }
  
  
}

function clearmove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}

function clickPlayagain() {
  reset();
  startGame();
  

}

function reset() {
  myGamePiece = undefined;
  myObstacles = [];
  myScore = "";
  
}







