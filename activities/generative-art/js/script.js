/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let rectangle = {
  x: 0,
  y: 250,
  speed: 1,
  size: 25,
  growthRate: 1,
  fill: 255
};


function setup() {
  createCanvas(500, 500);
}


/**
Description of draw()
*/
function draw() {
background(0);
rectangle.fill = map(rectangle.x,0,475,0,255);
fill(rectangle.fill);
stroke(255);
rect(rectangle.x,rectangle.y,rectangle.size,rectangle.size,rectangle.speed)
rectangle.x = rectangle.x + rectangle.speed;
// rectangle.size += rectangle.growthRate;
rectangle.x = constrain(rectangle.x,0,475);
}
