let PlayerX = 200,
    PlayerY = 400;

function setup() {
    createCanvas(400, 600);
}

function draw() {
    background(220);
    rectMode(CENTER);
    rect(PlayerX, PlayerY, 30, 45);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        PlayerX -= 5;
    }

    if (keyCode === RIGHT_ARROW) {
        PlayerX += 5;
    }

    if (keyCode === UP_ARROW) {
        PlayerY -= 5;
    }

    if (keyCode === DOWN_ARROW) {
        PlayerY += 5;
    }
}