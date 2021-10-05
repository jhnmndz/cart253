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
  x: 250,
  y: 250,
  size: 30,
  vx: 0,
  vy: 0,
  speed: 5,
}

/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
}


/**
Draw love circles and their movements
*/
function draw() {
  background(247, 54, 177);
  //Display love circles
  ellipse(helplessLover.x,helplessLover.y,helplessLover.size);
  push();
  fill(247, 54, 177);
  // noStroke();
  ellipse(hardToGet.x,hardToGet.y,hardToGet.size);
  pop();
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
  //Automated movements
  let change = random();
  if (change < 0.05) {
    hardToGet.vx = random(-hardToGet.speed,hardToGet.speed);
    hardToGet.vy = random(-hardToGet.speed,hardToGet.speed);
  }
  //helplessLover movement
  helplessLover.x = helplessLover.x + helplessLover.vx;
  helplessLover.y = helplessLover.y + helplessLover.vy;
  //hardToGet movement
  hardToGet.x = hardToGet.x + hardToGet.vx;
  hardToGet.x = constrain(hardToGet.x,0,width);
  hardToGet.y = hardToGet.y + hardToGet.vy;
  hardToGet.y = constrain(hardToGet.y,0,width);
}
