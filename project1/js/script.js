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
1. ball will avoid bars moving towards
2. bars will randomly move on the x-axis
3. background will indicate build up of adrenaline
4. once background filled, bars will be replaced with bubbles
5. bubbles are indicating adrenaline
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

let bar = { //indicated as intimidating deadline (personal and work)
  x: 0,
  y: 0,
  xBar: undefined,
  yBar: 50,
  vx: 0,
  vy: 0,
  r: 200,
  g: 200,
  b: 200,
}

let bubble = { //indicated as productivity bubbles
  x: undefined,
  y: 0,
  xBubble: 300,
  yBubble: 10,
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

let timer = 0; //timer until productivity state

let state = `title`; //instructions on how to reach optimum productivity


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

  // if (state === `title`) {
  //   title();
  // }
  // else if (state === `simulation`) {
  //   simulation();
  // }
  // else if (state === `productive`) {
  //   productive();
  // }
  // else if (state === `stressed`) {
  //   stressed();
  // }

  display();
  ballMovement();

  //Officially stressed (losing state)
  // let d = dist(ball.x,ball.y,bar.x,bar.y);
  // if (d < ball.size + bar.size)
}

function display() {
  displayBall();
  displayBar();
  displayBubble();
}

function displayBall() {
  //display of the ball
  push();
  fill(ball.r, ball.g, ball.b);
  noStroke();
  ellipse(ball.x, ball.y, ball.xBall, ball.yBall);
  pop();
}

function ballMovement() {
  //ball movement
  ball.x = ball.x + ball.vx;
  ball.x = constrain(ball.x,0,width);
  //Controlled movements of ball (left and right keys only)
  if (keyIsDown(LEFT_ARROW)){
    ball.vx = -ball.speed;
  }
  else if(keyIsDown(RIGHT_ARROW)) {
    ball.vx = ball.speed;
  }
  else {
    ball.vx = 0;
  }
}

function displayBar() {
  //display of the bar
  push();
  fill(bar.r, bar.g, bar.b);
  noStroke();
  rect(bar.x, bar.y, bar.xBar, bar.yBar);
  pop();
}

function displayBubble() {
  //display of the bubble
  push();
  fill(bubble.r, bubble.g, bubble.b);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.xBubble, bubble.yBubble);
  pop();
}
