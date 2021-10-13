/**
Project 1: Simulation
John Mendoza

Creating a simulation where the paddle progressively gets smaller as the randomized direction of balls.
The goal of the game is to prevent the balls to get to the bottom of the canvas.
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


let paddle = { //paddle only moves on x axis at the bottom of the canvas
  x: undefined,
  y: 450,
  xPaddle: 300,
  yPaddle: 10,
  vx: 0,
  vy: 0,
  r: 100,
  g: 100,
  b: 100,
}

let paddleImage;

let growBall = { //growBall will allow the paddle to gain surface area
  x: undefined,
  y: 0,
  xGrowBall: 300,
  yGrowBall: 10,
  vx: 0,
  vy: 0,
  r: 200,
  g: 200,
  b: 200,
}

let shrinkBall = { //shrinkBall will reduce the surface area of paddle
  x: undefined,
  y: 0,
  xShrinkBall: 300,
  yShrinkBall: 10,
  vx: 0,
  vy: 0,
  r: 200,
  g: 200,
  b: 200,
}

let canvasColor = {
  x: 1000,
  y: 1000,
  r: 150,
  g: 150,
  b: 150
}



/**
Maybe uploading Christmas-related imagery???
*/
function preload() {
  //paddleImage = loadImage("assets/images/");
}


/**
Creating the interface of the game
*/
function setup() {
  createCanvas(canvas.x,canvas.y);
}


/**
Displaying elements
*/
function draw() {
  background(canvasColor.r,canvasColor.g,canvasColor.b);
  //display of the paddle
  push();
  fill(paddle.r,paddle.g,paddle.b);
  noStroke();
  rect(paddle.x,paddle.y,paddle.xPaddle,paddle.yPaddle);
  pop();
  //display of the growBall
  push();
  fill(growBall.r,growBall.g,growBall.b);
  noStroke();
  ellipse(growBall.x,growBall.y,growBall.xGrowBall,growBall.yGrowBall);
  pop();
  //display of the shrinkBall
  push();
  fill(shrinkBall.r,shrinkBall.g,shrinkBall.b);
  noStroke();
  ellipse(shrinkBall.x,shrinkBall.y,shrinkBall.xShrinkBall,shrinkBall.yShrinkBall);
  pop();
}
