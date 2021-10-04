/**
E4: Functions using automated movements
John Mendoza

Using automated movements without the need of a user
*/

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 2

}

"use strict";

/**
Draws canvas
*/
function setup() {
  createCanvas(500,500);

}

/**
Draws circle
*/
function draw() {
  background(0);

  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  ellipse(circle.x,circle.y,circle.size);
}
