/**
E3: Love, Actually
John Mendoza

Using functions to find love

Plan:
1. Set up the program
  Create objects looking for love in a crowd
  Do basic set up of our canvas
  Assign the objects random starting velocities in setup
  Set the background in draw
2. Work on the simulation part
  Get the objects moving and display them
  Check for either object moving off the screen
  Check for the circles intersecting
  Move the simulation stuff into functions
3. Add the idea of states
  Create a state variable and check it in draw
  Connect the states

Note to self: Try adding a map feature to the color of the background that indicates
the timer or the fleeting of feelings (to resemble life's harsh reality)
*/

"use strict";


let helplessLover = {
  x: 100,
  y: 100,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,

}

let hardToGet = {
  x: 400,
  y: 400,
  size: 15,
  r: 247,
  g: 54,
  b: 177,
  vx: 0,
  vy: 0,
  speed: 5,
  tx: 0,
  ty: 10,
  loveTimer: 0,
}

let timer = 0;

let state = `title`;

/**
Draw canvas
*/
function setup() {
  createCanvas(500,500);
}


/**
Draw love circles and their movements
*/
function draw() {
  background(hardToGet.r, hardToGet.g, hardToGet.b);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `love`) {
    love();
  }
  else if (state === `sad`) {
    sad();
  }
}

function simulation() {
  sadTimer();
  display();
  movement();
  overlap();
}

function display() {
  //Display love circles
  ellipse(helplessLover.x,helplessLover.y,helplessLover.size);
  push();
  fill(hardToGet.r, hardToGet.g, hardToGet.b);
  noStroke();
  ellipse(hardToGet.x,hardToGet.y,hardToGet.size);
  pop();
}

function movement() {
  controlledMovement();
  automatedMovement();
}

function controlledMovement() {
  //Controlled movements (keyboard inputs)
  if (keyIsDown(LEFT_ARROW)){
    helplessLover.vx = -helplessLover.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    helplessLover.vx = helplessLover.speed;
  }
  else {
    helplessLover.vx = 0;
  }
  if (keyIsDown(UP_ARROW)){
    helplessLover.vy = -helplessLover.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    helplessLover.vy = helplessLover.speed;
  }
  else {
    helplessLover.vy = 0;
  }
}

function automatedMovement() {
  //hardToGet automated movements
  hardToGet.tx = hardToGet.tx + 0.05;
  hardToGet.ty = hardToGet.ty + 0.05;
  let noiseX = noise(hardToGet.tx);
  let noiseY = noise(hardToGet.ty);
  hardToGet.vx = map(noiseX,0,1,-hardToGet.speed,hardToGet.speed);
  hardToGet.vy = map(noiseY,0,1,-hardToGet.speed,hardToGet.speed);
  //helplessLover movement
  helplessLover.x = helplessLover.x + helplessLover.vx;
  helplessLover.y = helplessLover.y + helplessLover.vy;
  //hardToGet movement
  hardToGet.x = hardToGet.x + hardToGet.vx;
  hardToGet.x = constrain(hardToGet.x,0,width);
  hardToGet.y = hardToGet.y + hardToGet.vy;
  hardToGet.y = constrain(hardToGet.y,0,width);
}

function title() {
  push();
  titleText();
  pop();
}

function love() {
  push();
  background(255, 219, 166);
  loveText();
  pop();
}

function loveTimer() {
  let d = dist(helplessLover.x,helplessLover.y,hardToGet.x,hardToGet.y);
  if (d < helplessLover.size/2 + hardToGet.size/2){
    hardToGet.loveTimer++
    if (hardToGet.loveTimer >= 60){
      state = `love`;
    }
  }
  else {
    hardToGet.loveTimer = 0;
  }
}

function sad() {
  push();
  background(59, 86, 99);
  sadText();
  pop();
}

function sadTimer() {
  let d = dist(helplessLover.x,helplessLover.y,hardToGet.x,hardToGet.y);
  if (d > helplessLover.size/2 + hardToGet.size/2){
    // if (frameCount % 60 == 5 && timer > 0) {
    //   timer --;
    // }
    // if (timer == 5) {
    //   state = `sad`;
    // }
    timer++
    if (timer >= 1200){
      state = `sad`;
    }
  }
}

function overlap() {
  loveTimer();
}

function titleText() {
  textSize(30);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`♥?`,width/2,height/2);
  textSize(15);
  textAlign(LEFT);
  text(`To play: use arrow keys\nGoal: find and hover over love for 2 seconds\nNote: Act fast! They might lose feelings...`, 30, 450);
}

function loveText() {
  textSize(60);
  fill(252, 177, 3);
  textAlign(CENTER,CENTER);
  text(`( ˘ ³˘)♥`,width/2,height/2);
  textAlign(CENTER,CENTER);
  textSize(15);
  text(`Hey, Siri. Play "Lover's Rock" by SADE`, width/2, 200);
}

function sadText() {
  textSize(60);
  fill(66, 173, 255);
  textAlign(CENTER,CENTER);
  text(`( ⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)`,width/2,height/2);
  textAlign(CENTER,CENTER);
  textSize(15);
  text(`Hey, Siri. Play "Officially Missing You" by Tamia n\refresh to restart`, width/2, 200);
}

function keyPressed() {
  if (state === `title`){
    state = `simulation`;
  }
}
