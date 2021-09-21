/**
E1: I like to move it!
John Mendoza

Using map() and constrain() draw functions to declare and change variables.
*/

"use strict";

let star1 = {
  x1: 20,
  y1: 60,
  x2: 50,
  y2: 50,
  x3: 30,
  y3: 70,
  x4: 15,
  y4: 30,
  speed: 1,

}


/**
Draws canvas
*/
function setup() {
  createCanvas(500,500);
  background(0);
}


/**

*/
function draw() {
  fill(255);
  push();
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 5, 70, 3);
  pop();
}
