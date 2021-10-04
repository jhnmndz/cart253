/**
E4: Functions with parameters
John Mendoza

*/

"use strict";

/**
Draws a
*/
function setup() {
  createCanvas(500,500);
}


/**
Draws lines
*/
function draw() {
  background(0);

  /**
  Function call with parameters
  */
  parallels(100,100,5,1,100,3);
  parallels(50,50,10,2,20,6);
}

/**
Defined functions and added parameters(variables)
*/
function parallels(x,y,numLines,lineWidth,lineHeight,lineSpacing){
  for (let i = 0; i < numLines; i++){
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(x,y,lineWidth,lineHeight);
    x = x + lineSpacing;
  }
}
