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


let aim_x = 0;
let aim_y = 0;


let blood;
let blood_x = [];
let blood_y = [];


let life = 3;
let score=0;

function preload() {
    target = loadImage("https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2F%E5%87%86%E6%98%9F.png?v=1618451561761")
    hole = loadImage("https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2F%E7%8E%BB%E7%92%83%E7%A2%8E%E7%89%87.png?v=1618451481713")
    shot_sound = loadSound('https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2F%E5%BB%B6%E8%BF%9F%E6%9E%AA.mp3?v=1618485000322')
    glass_sound = loadSound('https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2Fy493w-tf8ei.mp3?v=1618485776496')
    blood = loadImage('blood2.png')
}

function setup() {
    createCanvas(1280, 960);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses);

    setInterval(increment, 1); // 2000 ms = every 2 seconds
}

function gotPoses(poses) {
    // console.log(poses);
    if (poses.length > 0) {
        let nX = poses[0].pose.keypoints[10].position.x;
        let nY = poses[0].pose.keypoints[10].position.y;
        let eX = poses[0].pose.keypoints[9].position.x;
        let eY = poses[0].pose.keypoints[9].position.y;
        noseX = lerp(noseX, nX, 0.7);
        noseY = lerp(noseY, nY, 0.7);
        eyelX = lerp(eyelX, eX, 0.7);
        eyelY = lerp(eyelY, eY, 0.7);
    }
}

function modelReady() {
    console.log('model ready');
}

function draw() {

    background(220);


    text("score:"+score, 100, 500);
    text("shoot remain:"+(200-counter%200)/100, 200, 500);

    text("life remain:"+life, 350, 500);

    if (life == 0) {
        text("GAME OVER", 500, 500);
    }




    image(video, 0, 0);


    push()
    fill(255, 0, 0);
    ellipse(noseX, noseY, 20);
    pop()

    push()
    fill(255, 0, 0);
    ellipse(eyelX, eyelY, 20);
    pop()


    



    aim_x = lerp(aim_x, noseX, 0.05);
    aim_y = lerp(aim_y, noseY, 0.05);
    image(target, aim_x-50, aim_y-50, 100, 100);

    if (counter % 100 == 0 && counter >400) {
        happen();
    }
    for (let i = 0; i < Array_x.length; i++) {
        push();
        imageMode(CENTER);
        image(hole, Array_x[i] + 25, Array_y[i], 200, 200);
        pop();
    }


    for (let i = 0; i < Array_x.length; i++) {
        push();
        imageMode(CENTER);
        image(blood, blood_x[i], blood_y[i], 100, 100);
        pop();
    }



}






let aim_range=20;

function happen() {
    if((noseX>aim_x-aim_range && noseX<aim_x+aim_range)&&(noseY>aim_y-aim_range && noseY<aim_y+aim_range)){
        blood_x.push(aim_x);
        blood_y.push(aim_y);
        if(life>0){
            life--;
        }
    }
    Array_x.push(aim_x);
    Array_y.push(aim_y);

    glass_sound.play();
    shot_sound.play();

}

function increment() {
    counter++;
    if(life>0){
        score++;
    }
    
}


