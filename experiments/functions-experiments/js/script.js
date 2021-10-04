/**
Functions experiment 1
John Mendoza

Following the youtube playlist for functions.
Typing function to define it, then call for it.
*/

"use strict";

let circle={
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0,

}

/**
Defined as a function definition
*/
function setup() {
  createCanvas(500,500);
}


/**
Draws a moving circle
*/
function draw() {
  background(0);
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  if (circle.x > width) {
    reset();
  }

  fill(255,0,0);
  ellipse(circle.x,circle.y,circle.size);
}

/**
Defining a function
*/
function reset(){
  circle.x = 0;
  circle.vx = circle.vx + 2;
  circle.size = circle.size + 5;
}

/**
Resets to the left of canvas
*/
function mousePressed(){
  reset();
}
