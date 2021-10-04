/**
E4: Functions using keyboard inputs
John Mendoza

Learning how to use keyboard inputs
*/

let bg = 0;

"use strict";

/**
Draws canvas
*/
function setup() {
  createCanvas(500,500);

}

/**
Draws text animation
*/
function draw() {
  background(bg);

  textAlign(CENTER,CENTER);
  textSize(64);
  fill(255);
  text(keyCode,width/2,height/2);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    bg = bg + 10;
    bg = constrain(bg,0,255);
  }
  else if (keyCode === DOWN_ARROW){
    bg = bg - 10;
    bg = constrain(bg,0,255)
  }
}
