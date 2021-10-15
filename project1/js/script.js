/**
Project 1: Simulation of Avoidance Behaviour
John Mendoza

Creating a simulation where the circle needs to avoid the moving paddles.
The concept of the game is dodging responsibilities until productivity/urgency builds up.

Cycle of stress while showing the reliance on pumps of adrenaline to help productivity

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

Concept:
1. ball will avoid movingBars moving towards
2. movingBars will randomly move on the x-axis
3. background will indicate build up of adrenaline
4. once background filled, bars will be replaced with movingBalls
5. movingBalls are indicating adrenaline
6. ball will begin to shake with energy until optimal productivity levels are reached.
7. You win, you're productive... until you aren't.
*/

"use strict";


let ball = { //showcasing avoidance behaviour until the very last second
  x: 250,
  y: 900,
  xBall: 30,
  yBall: 30,
  vx: 0,
  vy: 0,
  speed: 3,
  r: 255,
  g: 255,
  b: 255,
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

let workspace = { //minimal space
  x: 500,
  y: 1000,
  r: 0,
  g: 0,
  b: 0
}



/**
Maybe office photos?
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
  ellipse(ball.x, ball.y, ball.xBall, ball.yBall);
  pop();
  //ball movement
  ball.x = ball.x + ball.vx;
  ball.y = ball.y + ball.vy;
  //Controlled movements (keyboard inputs)
  if (keyIsDown(LEFT_ARROW)){
    ball.vx = -ball.speed;
  }
  else if(keyIsDown(RIGHT_ARROW)) {
    ball.vx = ball.speed;
  }
  else {
    ball.vx = 0;
  }
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
  //Officially stressed (losing state)
  // let d = dist(ball.x,ball.y,movingBar.x,movingBar.y);
  // if (d < ball.size + movingBar.size)
}
