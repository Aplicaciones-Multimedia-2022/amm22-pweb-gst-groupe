var myGamePiece;
var myObstacles = [];
var myScore;


function startGame() {
    myGamePiece = new component(70, 70, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/hogsqueel_alldir_x2_and_actual.webp%20(2).gif", 10, 120, "image");
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
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
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
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
    if (myGameArea.frameNo == 1 || everyinterval(110)) {
        xobstacle = Math.floor(Math.random() * 460);
        yobstacle = Math.floor(Math.random() * 250);
        myObstacles.push(new component(40, 40, "https://cdn-icons-png.flaticon.com/512/32/32128.png", xobstacle, yobstacle, "image"));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].update();
        myObstacles = myObstacles.slice(i);

    }
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
    clearmove()
    if (myGameArea.key && myGameArea.key == 37) { moveleft() }
    if (myGameArea.key && myGameArea.key == 39) { moveright() }
    if (myGameArea.key && myGameArea.key == 38) { moveup() }
    if (myGameArea.key && myGameArea.key == 40) { movedown() }

}


function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) { return true; }
    return false;
}

function moveup() {

    myGamePiece = new component(70, 70, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/hogsqueel_alldir_x2_and_actual.webp%20(1).gif", myGamePiece.x, myGamePiece.y, "image");
    myGamePiece.speedY = -1;

}

function movedown() {
    myGamePiece = new component(70, 70, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/hogsqueel_alldir_x2_and_actual.webp%20(2).gif", myGamePiece.x, myGamePiece.y, "image");

    myGamePiece.speedY = 1;
}

function moveleft() {
    myGamePiece = new component(70, 70, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/hogsqueel_alldir_x2_and_actual.webp.gif", myGamePiece.x, myGamePiece.y, "image");

    myGamePiece.speedX = -1;
}

function moveright() {
    myGamePiece = new component(70, 70, "https://raw.githubusercontent.com/Aplicaciones-Multimedia-2022/amm22-pweb-gst-groupe/main/hogsqueel_alldir_x2_and_actual.webp%20(3).gif", myGamePiece.x, myGamePiece.y, "image");

    myGamePiece.speedX = 1;
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
