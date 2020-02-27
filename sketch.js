function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES)
}

function draw() {
    background(0);
    translate(300, 300);
    noFill();
    strokeWeight(8);
    rotate(-90);

    let sc = second();
    let scAngle = map(sc, 0, 60, 0, 360);
    stroke(217, 56, 155);
    arc(0, 0, 340, 340, 0, scAngle);
    push();
    rotate(scAngle);
    line(0, 0, 125, 0);
    pop();

    let min = minute();
    let minAngle = map(min, 0, 60, 0, 360);
    stroke(77, 214, 56);
    arc(0, 0, 320, 320, 0, minAngle);
    push();
    rotate(minAngle);
    line(0, 0, 100, 0);
    pop();

    let hr = hour();
    let hrAngle = map(hr%12, 0, 12, 0, 360);
    stroke(107, 55, 212);
    arc(0, 0, 300, 300, 0, hrAngle);
    push();
    rotate(hrAngle);
    line(0, 0, 75, 0);
    pop();

    stroke(255);
    strokeWeight(12);
    point(0, 0);
}