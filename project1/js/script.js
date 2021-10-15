/**
Project 1: Simulation
John Mendoza

Creating a simulation where the circle needs to avoid the moving paddles.
The concept of the game is dodging responsibilities until productivity/urgency builds up.

Might be a Christmas-themed simulation?

Plan:
1. Set up the program
  Create elements
  Do basic set up of our canvas
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


let ball = { //showcasing avoidance behaviour until the very last second
  x: undefined,
  y: 450,
  xBall: 300,
  yBall: 10,
  vx: 0,
  vy: 0,
  r: 100,
  g: 100,
  b: 100,
}

let movingBar = { //indicated as intimidating deadline (personal and work)
  x: undefined,
  y: 0,
  xMovingBar: 300,
  yMovingBar: 10,
  vx: 0,
  vy: 0,
  r: 200,
  g: 200,
  b: 200,
}

let movingBall = { //indicated as productivity bubbles
  x: undefined,
  y: 0,
  xMovingBall: 300,
  yMovingBall: 10,
  vx: 0,
  vy: 0,
  r: 200,
  g: 200,
  b: 200,
}

let workspace = {
  x: 500,
  y: 1000,
  r: 255,
  g: 255,
  b: 255
}



/**
Maybe uploading Christmas-related imagery???
*/
function preload() {
}


/**
Creating workspace
*/
function setup() {
  createCanvas(workspace.x, workspace.y);
}


/**
Displaying ball with its many responsibilities
*/
function draw() {
  background(workspace.r, workspace.g, workspace.b);
  //display of the ball
  push();
  fill(ball.r, ball.g, ball.b);
  noStroke();
  rect(ball.x, ball.y, ball.xBall, ball.yBall);
  pop();
  //display of the movingBar
  push();
  fill(movingBar.r, movingBar.g, movingBar.b);
  noStroke();
  ellipse(movingBar.x, movingBar.y, movingBar.xMovingBar, movingBar.yMovingBar);
  pop();
  //display of the movingBall
  push();
  fill(movingBall.r, movingBall.g, movingBall.b);
  noStroke();
  ellipse(movingBall.x, movingBall.y, movingBall.xMovingBall, movingBall.yMovingBall);
  pop();
}
