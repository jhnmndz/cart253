/**
Variables experiments
John Mendoza

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
let bgShade=0
let circleX=0;
let circleY=250;
let circleSize=200;
let circleSpeed=1;
let circleAcceleration=0.25;

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
  circleX+=circleSpeed;
  circleSpeed+=circleAcceleration;
  ellipse(circleX,circleY,circleSize);
}
