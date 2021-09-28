/**
E1: I like to move it!
John Mendoza

Using map() and constrain() draw functions to declare and change variables.
*/

"use strict";

let rectangle1 = {
  x: 0,
  y: 0,
  xSize: 100,
  ySize: 600,
  speed: 5,
}

let rectangle2 = {
  x: 0,
  y: 0,
  size: 50,
  speed: 1,
}

/**
Draws canvas
*/
function setup() {
  createCanvas(600,600);


}


/**
Draws moving shapes using maps and constrains
*/
function draw() {
  background(0);
  rectangle1.fill = map(rectangle1.x,0,600,0,255);
  fill(rectangle1.fill);
  noStroke();
  rect(rectangle1.x,rectangle1.y,rectangle1.xSize,rectangle1.ySize,rectangle1.speed)
  rectangle1.x = rectangle1.x + rectangle1.speed;
  rectangle2.fill = map(rectangle2.x,0,600,0,255);
  fill(mouseY);
  stroke(0);
  rect(mouseX,mouseY,mouseX);

}
