var canvas;



let video;
let poseNet;

let centerX = 0;
let centerY = 0;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;


let gameover;
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
let counter = -400;


let aim_x = 0;
let aim_y = 0;


let blood;
let blood_x = [];
let blood_y = [];

let knief;
let knief_x = [];
let knief_y = [];



let hurt;
let hurt_x = [];
let hurt_y = [];

let life =5;
let score=0;

let aim_range=40;

let block_sound;
let bleed_sound;
let death_sound;




function preload() {
    target = loadImage("https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2F%E5%87%86%E6%98%9F.png?v=1618451561761")
    hole = loadImage("https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2F%E7%8E%BB%E7%92%83%E7%A2%8E%E7%89%87.png?v=1618451481713")
    gameover = loadImage('gameover.png')
    shot_sound = loadSound('https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2F%E5%BB%B6%E8%BF%9F%E6%9E%AA.mp3?v=1618485000322')
    glass_sound = loadSound('https://cdn.glitch.com/58200b26-1b78-4f2d-abc8-e08313ebb3af%2Fy493w-tf8ei.mp3?v=1618485776496')
    block_sound = loadSound('block_sound.mp3')
    bleed_sound = loadSound('bleed.mp3')
    death_sound = loadSound('death.mp3')
    blood = loadImage('blood2.png')
    knief = loadImage('knief.png') 
    hurt =loadImage('hurt.png')
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
        let cX = poses[0].pose.keypoints[0].position.x;
        let cY = poses[0].pose.keypoints[0].position.y;
        let nX = poses[0].pose.keypoints[10].position.x;
        let nY = poses[0].pose.keypoints[10].position.y;
        let eX = poses[0].pose.keypoints[9].position.x;
        let eY = poses[0].pose.keypoints[9].position.y;
        centerX=lerp(centerX, cX, 0.7);
        centerY=lerp(centerY, cY, 0.7);
        noseX = lerp(noseX, nX, 0.7);
        noseY = lerp(noseY, nY, 0.7);
        eyelX = lerp(eyelX, eX, 0.7);
        eyelY = lerp(eyelY, eY, 0.7);
    }
}

function modelReady() {
    console.log('model ready');
}


let time = 600;
function draw() {

    background(220);


    text("score:"+score, 100, 500);
    // text("shoot remain:"+(500-counter%500)/100, 200, 500);

    text("life remain:"+life, 350, 500);

    push()
    textSize(30);
    fill(255,0,0);
    text('Dodge bullets and prevent bullets from hitting your head', 50, 550);
    text('Use your hand to block the dagger!!!', 50, 600);
    pop()




    image(video, 0, 0);


    push()
    fill(255, 0, 0);
    ellipse(centerX, centerY, 20);
    pop()

    push()
    fill(255, 0, 0);
    ellipse(noseX, noseY, 20);
    pop()

    push()
    fill(255, 0, 0);
    ellipse(eyelX, eyelY, 20);
    pop()

    


    

    for (let i = 0; i < knief_x.length; i++) {

        if(((noseX>knief_x[i]-aim_range && noseX<knief_x[i]+aim_range)&&(noseY>knief_y[i]-aim_range && noseY<knief_y[i]+aim_range))||((eyelX>knief_x[i]-aim_range && eyelX<knief_x[i]+aim_range)&&(eyelY>knief_y[i]-aim_range && eyelY<knief_y[i]+aim_range))){
            knief_x.splice(i,1);
            knief_y.splice(i,1);
            block_sound.play();
            console.log("myNum");

        }


    }

    aim_x = lerp(aim_x, centerX, 0.05);
    aim_y = lerp(aim_y, centerY, 0.05);

    image(target, aim_x-50, aim_y-50, 100, 100);

    if (counter % 100 == 0 && counter >400) {
        happen();
    }

    if (counter % 133 == 0 && counter >0) {
        knief_x.push(random(100,600));
        knief_y.push(random(100,400));
    }

    if ((counter % 500) == 0 && counter >0) {
        console.log("kill");

        for (let i = 0; i < knief_x.length; i++) {
            hurt_x.push(knief_x[i]);
            hurt_y.push(knief_y[i]);
            if(life>0){
                life--;
            }
            
           
        }
        bleed_sound.play();
        knief_x = [];
        knief_y = [];
    }


    for (let i = 0; i < knief_x.length; i++) {
        push();
        imageMode(CENTER);
        image(knief, knief_x[i], knief_y[i], 150, 150);
        pop();
    }

    for (let i = 0; i < hurt_x.length; i++) {
        push();
        imageMode(CENTER);
        image(hurt, hurt_x[i], hurt_y[i], 200, 200);
        pop();
    }

    for (let i = 0; i < Array_x.length; i++) {
        push();
        imageMode(CENTER);
        image(blood, blood_x[i], blood_y[i], 100, 100);
        pop();
    }

    if (life == 0) {
        image(gameover, 50, 100, 500,300);
    }

}




function increment() {
    counter++;
    if(life>0){
        score++;
    }
    
}

let aim_range2=20
function happen() {
    if((centerX>aim_x-aim_range2 && centerX<aim_x+aim_range2)&&(centerY>aim_y-aim_range2 && centerY<aim_y+aim_range2)){
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