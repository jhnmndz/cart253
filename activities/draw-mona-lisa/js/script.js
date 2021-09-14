/**
Mona Lisa in 30 minutes
John Mendoza

Using p5 functions, I will draw an iteration of the Mona Lisa.
*/

"use strict";

/**
Description of setup
*/
function setup() {
  createCanvas(420,640);
  background(188, 232, 146);
  //Background details
  noStroke();
  fill(92, 153, 161);
  rect(0,200,420,100);
  fill(138, 161, 92);
  triangle(0,130,0,250,50,180);
  //Draw head
  noStroke()
  fill(237, 237, 147);
  ellipse(210,200,125,150);
}
