let PlayerX = 200,
    PlayerY = 400;
let LeftKey = false,
    RightKey = false,
    UpKey = false,
    DownKey = false;

function setup() {
    createCanvas(400, 600);
}

function draw() {
    background(220);
    rectMode(CENTER);
    rect(PlayerX, PlayerY, 30, 45);

    if (LeftKey) PlayerX -= 5;
    if (RightKey) PlayerX += 5;
    if (UpKey) PlayerY -= 5;
    if (DownKey) PlayerY += 5;
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