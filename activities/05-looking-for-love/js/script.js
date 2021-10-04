/**
A5: Looking for love
John Mendoza

Using functions to find love

Plan:
1. Set up the program
  Create objects representing our circles looking for love
  Do basic set up of our canvas
  Assign the circles random starting velocities in setup
  Set the background in draw
2. Work on the simulation part
  Get the circles moving and display them
  Check for either circle moving off the screen (sadness)
  Check for the circles intersecting (love)
  Move the simulation stuff into functions
3. Add the idea of states (title, simulation, love, sadness)
  Create a state variable and check it in draw
  Add title, love, and sadness functions that use simple text
  Connect the states (click to begin, simulation leads to outcomes)
*/

"use strict";

let circle1 = {
  x: undefined,
  y: 100,
  size: 143,
  vx: 0,
  vy: 0,
  speed: 5,
}

let circle2 = {
  x: undefined,
  y: 100,
  size: 143,
  vx: 0,
  vy: 0,
  speed: 5,
}

let state = `title`; //can be: title, simulation, love, sadness

/**
Description of preload
*/
function preload() {

}


/**
Create love canvas because 143 means 'I love you' in numerics
*/
function setup() {
  createCanvas(555,555);
  circleSetup();
}

function circleSetup() {
  //Positions of circles on canvas
  circle1.x = width/3
  circle2.x = 2*width/3
  //Circle randomized movement
  circle1.vx = random(-circle1.speed,circle1.speed);
  circle2.vx = random(-circle2.speed,circle2.speed);
  circle1.vy = random(-circle1.speed,circle1.speed);
  circle2.vy = random(-circle2.speed,circle2.speed);
}

/**
Draws love circle simulations()
*/
function draw() {
  background(247, 54, 177);

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

function title() {
  push();
  textSize(30);
  fill(255);
  textAlign(CENTER,CENTER);
  text(`♥?`,width/2,height/2);
  pop();
}

function simulation() {
  move();
  offScreen();
  overlap();
  display();
}

function love() {
  push();
  background(255, 219, 166);
  textSize(60);
  fill(233, 255, 122);
  textAlign(CENTER,CENTER);
  text(`( ˘ ³˘)♥`,width/2,height/2);
  textAlign(CENTER,CENTER);
  textSize(15);
  text(`Hey, Siri. Play "Lover's Rock" by SADE`, width/2, 200);
  pop();
}

function sad() {
  push();
  background(59, 86, 99);
  textSize(60);
  fill(66, 173, 255);
  textAlign(CENTER,CENTER);
  text(`( ⚈̥̥̥̥̥́⌢⚈̥̥̥̥̥̀)`,width/2,height/2);
  textAlign(CENTER,CENTER);
  textSize(15);
  text(`Hey, Siri. Play "Officially Missing You" by Tamia`, width/2, 200);
  pop();
}

function move() {
  //Circle movements
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;
  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

function offScreen() {
  //Check if circle is off screen
  if (isOffScreen(circle1) || isOffScreen(circle2)) {
    state = `sad`
  }
}

function isOffScreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height){
    return true;
  }
  else {
    return false;
  }
}

function overlap() {
  //Check if circle overlap
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2){
    state = `love`
  }
}

function display() {
  //Display circles
  ellipse(circle1.x,circle1.y,circle1.size)
  ellipse(circle2.x,circle2.y,circle2.size)
}

function mousePressed() {
  if (state === `title`){
    state = `simulation`;
  }
}
