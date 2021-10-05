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


let circle1 = {
  x: 100,
  y: 100,
  size: 100,
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
Draws circles()
*/
function draw() {
  background(247, 54, 177);
  //Display circles
  ellipse(circle1.x,circle1.y,circle1.size)
  //Movement Controls
  if (keyIsDown(LEFT_ARROW)){
    circle1.vx = -circle1.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    circle1.vx = circle1.speed;
  }
  else {
    circle1.vx = 0;
  }
  if (keyIsDown(UP_ARROW)){
    circle1.vy = -circle1.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    circle1.vy = circle1.speed;
  }
  else {
    circle1.vy = 0;
  }
  //Circle movements
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;
}
