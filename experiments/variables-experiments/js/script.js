/**
Variables experiments
John Mendoza

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let bgShade=0
let circle={
  x:250,
  y:250,
  size:100,
  speed:2,
  fill:0
};

/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {
  background(bgShade);
  circle.x+=circle.speed;
  circle.fill=random(0,255);
  circle.speed=random(-5,5);
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);

  let randomNumber=random();

  console.log(randomNumber);
}
