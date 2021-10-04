/**
E4: Functions using keyboard inputs
John Mendoza

Using keyboard inputs to move a circle on a canvas
*/

let circle = {
  x: 250,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5

}

"use strict";

/**
Draws canvas
*/
function setup() {
  createCanvas(500,500);

}

/**
Draws circle reacting to keyboard inputs
*/
function draw() {
  background(0);

  handleInput();
  move();
  display();

}

function handleInput() {
  if (keyIsDown(LEFT_ARROW)) {
    circle.vx = -circle.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    circle.vx = circle.speed;
  }
  else {
    circle.vx = 0;
  }
  if (keyIsDown(UP_ARROW)){
    circle.vy = -circle.speed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    circle.vy = circle.speed;
  }
  else {
    circle.vy = 0;
  }
}

function move() {
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;
}

function display() {
  fill(255);
  ellipse(circle.x,circle.y,circle.size)
}
