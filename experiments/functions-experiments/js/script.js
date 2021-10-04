/**
E4: Functions using states
John Mendoza

Using state to organize
*/

"use strict";

let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2
}

/**
Draws canvas
*/
function setup() {
  createCanvas(500,500);
  circle.vx = circle.speed;
}


/**
Draws text
*/
function draw() {
  background(0);

  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  ellipse(circle.x,circle.y,circle.size);

}
