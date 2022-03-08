var canvas;
// var mic;

// function windowResized() {
//     //console.log('resized');
//     resizeCanvas(windowWidth, windowHeight);
// }

// function setup() {
//     canvas = createCanvas(windowWidth, windowHeight);
//     canvas.position(0, 0);
//     canvas.style('z-index', '-1');
//     mic = new p5.AudioIn();
//     mic.start();
//     //background(175);
// }

// // function keyPressed() {
// //   clear();
// // }

// function draw() {
//     background(175);
//     var vol = mic.getLevel();
//     ellipse(width / 2, height / 2, vol * 10000);
// }

let angle = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    for (let i = 0; i < 30; i++) {
        spaceship[i] = new spaceship(i * 130 - width / 2, random(0, windowHeight), 20, 50, random(0.02, 0.1));
    }
}

function draw() {
    background(200);

    for (let i = 0; i < 20; i++) {
        spaceship[i].draw();
        spaceship[i].move();
    }
}

class spaceship {
    constructor(x, y, z, size, direction, mass) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.rotate = rotate;
        this.direction = direction;
        this.mass = mass;
        this.hitground = false;
        this.hitup = false;
    }

    move() {
        if (this.y >= windowHeight + 50) {
            this.hitground = true;
        }
        if (this.hitground == true) {
            this.y -= 5;
        }
        if (this.hitground == false) {
            this.y += 10;
        }
        if (this.y <= 0 && this.hitground == true) {
            this.hitground = false;
        }
    }
    draw() {
        push();
        fill(random(100, 130), random(100, 200), random(100, 200));
        translate(this.x, this.y - width / 2, this.z);
        push();
        rotateX(angle * 0.07);
        rotateY(angle * 0.07);
        torus(this.size, 10);
        pop();
        angle += 0.07
        pop();
    }
}