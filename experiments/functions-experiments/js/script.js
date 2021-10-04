/**
E4: Functions using text
John Mendoza

Displays text
*/

"use strict";

let hello = {
  string: `Hello, world!`,
  x: 0,
  y: 0,
  fill: (155),
  vx: 5,
  vy: 1,
  point: 64,
  //style: (BOLD),
  outline: (50,200,20),
  outlineSize: 6,

}

/**
Draws canvas
*/
function setup() {
  createCanvas(500,500);

}


/**
Draws text
*/
function draw() {
  background(127);
  hello.x = hello.x + hello.vx;
  hello.y = hello.y + hello.vy;
  fill(hello.fill);
  textAlign(CENTER,CENTER);
  textSize(hello.point);
  textStyle(BOLD);
  stroke(hello.outline);
  strokeWeight(hello.outlineSize);
  text(hello.string,hello.x,hello.y)
}
