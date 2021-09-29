/**
E2: Dodge Em
John Mendoza

Using variables and conditionals to simulate Moira Rose being chased by a crow.
some code didn't work which I will have to revisit but for the time being this will do!
*/

"use strict";


let crow = {
  x: 600,
  y: 600,
  xSize: 200,
  ySize: 150,
  image: undefined,
  vx: 0,
  vy: 0,
  ax: 1,
  ay: 1,
  acceleration: .75,
  maxSpeed: 1.5
}

let moiraRose = {
  x: 0,
  y: 0,
  xSize: 100,
  ySize: 100,
  vx: 0,
  vy: 0,
  ax: 1,
  ay: 1,
  acceleration: 1.25,
  maxSpeed: 5,
  fill: 233,
  terrorThreshold: 200
}

let normalFace = undefined;
let lookingFace = undefined;
let scaredFace = undefined;
// let landscape = {
//   x: 0,
//   y: 0,
//   image: undefined,
//   xSize: 600,
//   ySize: 482.5,
// }


/**
Loading expressions of Moira and flying crow *I DO NOT OWN THE COPYRIGHTS TO THESE IMAGES*
*/
function preload() {
  normalFace = loadImage(`assets/images/normal-moira.png`);
  lookingFace = loadImage(`assets/images/looking-moira.png`);
  scaredFace = loadImage(`assets/images/scared-moira.png`);
  crow.image = loadImage(`assets/images/flying-crow.png`);
  landscape.image = loadImage(`assets/images/landscape.jpeg`);

}
/**
Creates landscape
*/
function setup() {
  createCanvas(600,600);

}


/**
drawing characters
*/
function draw() {
  background(92, 153, 80);
  // background(landscape.image,landscape.x,landscape.y,landscape.xSize,landscape.ySize);
  //Draw moiraRose
    imageMode(CENTER);
    image(normalFace,moiraRose.x,moiraRose.y,moiraRose.xSize,moiraRose.ySize);
    //moiraRose movement
    if (mouseX < moiraRose.x) {
      moiraRose.ax = -moiraRose.acceleration;
    }
    else {
      moiraRose.ax = moiraRose.acceleration;
    }

    if (mouseY < moiraRose.y) {
      moiraRose.ay = -moiraRose.acceleration;
    }
    else {
      moiraRose.ay = moiraRose.acceleration;
    }

    moiraRose.vx = moiraRose.vx + moiraRose.ax;
    moiraRose.vx = constrain(moiraRose.vx,-moiraRose.maxSpeed,moiraRose.maxSpeed)
    moiraRose.vy = moiraRose.vy + moiraRose.ay;
    moiraRose.vy = constrain(moiraRose.vy,-moiraRose.maxSpeed,moiraRose.maxSpeed)

    moiraRose.x = moiraRose.x + moiraRose.vx;
    moiraRose.y = moiraRose.y + moiraRose.vy;

    //Draw crow
      image(crow.image,crow.x,crow.y,crow.xSize,crow.ySize);
      //crow's movement
      if (mouseX < crow.x) {
        crow.ax = -crow.acceleration;
      }
      else {
        crow.ax = crow.acceleration;
      }

      if (mouseY < crow.y) {
        crow.ay = -crow.acceleration;
      }
      else {
        crow.ay = crow.acceleration;
      }

      crow.vx = crow.vx + crow.ax;
      crow.vx = constrain(crow.vx,-crow.maxSpeed,crow.maxSpeed)
      crow.vy = crow.vy + crow.ay;
      crow.vy = constrain(crow.vy,-crow.maxSpeed,crow.maxSpeed)

      crow.x = crow.x + crow.vx;
      crow.y = crow.y + crow.vy;

//Touching the crow
  let d = dist(moiraRose.x,moiraRose.y,crow.x,crow.y);
  if (d < crow.xSize/4 + moiraRose.xSize/4) {
    image(scaredFace,moiraRose.x,moiraRose.y,moiraRose.xSize,moiraRose.ySize);
    noLoop();
  }
  // if (d < moiraRose.terrorThreshold){

  // }

}
