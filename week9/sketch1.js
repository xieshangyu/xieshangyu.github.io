var canvas;



let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;



let img;
let cam;
let target;
let hole;
let shoted = false;
let Array_point = [];
let Array_x = [];
let Array_y = [];
let start = 0;
let shot_sound;
let glass_sound;
let counter = 0;






function draw() {
    image(video, 0, 0);
}





// let img;
// let cam;
// let target;
// let hole;
// let shoted = false;
// let Array_point = [];
// let Array_x = [];
// let Array_y = [];
// let start = 0;
// let shot_sound;
// let glass_sound;

// function preload() {
//     target = loadImage("https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2F%E5%87%86%E6%98%9F.png?v=1618451561761")
//     hole = loadImage("https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2F%E7%8E%BB%E7%92%83%E7%A2%8E%E7%89%87.png?v=1618451481713")
//     shot_sound = loadSound('https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2F%E5%BB%B6%E8%BF%9F%E6%9E%AA.mp3?v=1618485000322')
//     glass_sound = loadSound('https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2Fy493w-tf8ei.mp3?v=1618485776496')
// }

// function setup() {
//     createCanvas(640, 480);

//     cam = createCapture(VIDEO);
//     cam.hide();
//     img = createImage(width, height);

// }

// function draw() {
//     background(0);

//     cam.loadPixels();
//     img.loadPixels();

//     for (let y = 0; y < img.height; y++) {
//         for (let x = 0; x < img.width; x++) {
//             let index = (x + y * img.width) * 4;

//             let r = cam.pixels[index + 0];
//             let g = cam.pixels[index + 1];
//             let b = cam.pixels[index + 2];

//             let maxDistance = 250;
//             let distance = dist(mouseX, mouseY, x, y);
//             let alpha = map(distance, 0, maxDistance, 255, 0.0);
//             alpha = constrain(alpha, 0.0, 255);

//             img.pixels[index + 0] = r;
//             img.pixels[index + 1] = g * 1.5;
//             img.pixels[index + 2] = b / 3;
//             img.pixels[index + 3] = alpha;
//         }
//     }

//     img.updatePixels();
//     image(img, 0, 0);
//     push();
//     imageMode(CENTER);
//     image(target, mouseX, mouseY, 100, 100);
//     pop();




//     for (let i = 0; i < Array_x.length; i++) {
//         push();
//         imageMode(CENTER);
//         image(hole, Array_x[i] + 25, Array_y[i], 200, 200);
//         pop();
//     }


// }

function happen() {
    Array_x.push(noseX);
    Array_y.push(noseY);

    glass_sound.play();
    shot_sound.play();
}

function increment() {
    counter++;
}