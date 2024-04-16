class Bullet {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    render() {
        circle(this._x, this._y, 10);
    }
}

let PlayerX = 200,
    PlayerY = 400;
let LeftKey = false,
    RightKey = false,
    UpKey = false,
    DownKey = false;

let Bullets = new Bullet(200, 300);

function setup() {
    createCanvas(400, 600);
}

function draw() {
    background(220);
    rectMode(CENTER);
    rect(PlayerX, PlayerY, 30, 50);

    if (LeftKey && PlayerX >= 15) PlayerX -= 5;
    if (RightKey && PlayerX <= 385) PlayerX += 5;
    if (UpKey && PlayerY >= 25) PlayerY -= 5;
    if (DownKey && PlayerY <= 575) PlayerY += 5;

    Bullets.render()
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        LeftKey = true;
    }

    if (keyCode === RIGHT_ARROW) {
        RightKey = true;
    }

    if (keyCode === UP_ARROW) {
        UpKey = true;
    }

    if (keyCode === DOWN_ARROW) {
        DownKey = true;
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        LeftKey = false;
    }

    if (keyCode === RIGHT_ARROW) {
        RightKey = false;
    }

    if (keyCode === UP_ARROW) {
        UpKey = false;
    }

    if (keyCode === DOWN_ARROW) {
        DownKey = false;
    }
}