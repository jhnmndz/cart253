/**
Drawing Experiments
John Mendoza

Experimenting with p5 functions
Currently drawing a non-smiley face in a grey space
*/

"use strict";


/**
Draws a face on canvas
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);

  //Set background to grey
  background(200,200,200);

  //Draw a yellow head
  fill(255,241,92);
  ellipse(250,250,200,200);
  fill(0);

  //Draw eyes
  ellipse(200,250,20,20);
  ellipse(300,250,20,20);
  strokeWeight(10);
  line(200,300,300,300);




}


/**
Nothing...yet()
*/
function draw() {

}
