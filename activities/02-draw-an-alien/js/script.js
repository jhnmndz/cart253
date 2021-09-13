"use strict";

/**************************************************
Activity 02: Draw an alien
John Mendoza

Drawing an alien using p5 functions
**************************************************/

// setup()
//
// Draws an alien
function setup() {
  createCanvas(640,480);
  background(255,100,100);
  //Draw body
  fill(225, 225, 110);
  noStroke();
  rect(295,350,50,200);
  //Draw head
  fill(255, 255, 112);
  noStroke();
  arc(320,240,300,300,radians(0),radians(180),OPEN);
  fill(255,100,100);
  ellipse(320,240,250,200);
  fill(255, 255, 112);
  arc(320,240,250,200,radians(91),radians(91));
  //Draw eyes
  fill(255, 255, 112);
  noStroke();
  fill(255, 255, 112);
  ellipse(185,225,75,75);
  fill(255);
  ellipse(185,225,50,50);
  fill(0);
  ellipse(185,225,35,35);
  fill(255, 255, 112);
  ellipse(455,225,75,75);
  fill(255);
  ellipse(455,225,50,50);
  fill(0);
  ellipse(455,225,35,35);
  //Draw mouth
  fill(0);
  ellipse(320,375,20,20);
}

// draw()
//
// Does nothing
function draw() {

}
