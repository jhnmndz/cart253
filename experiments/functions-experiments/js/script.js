/**
E4: Functions using text
John Mendoza

Displays text
String of text using "double quotation marks" or 'single quotes' or `back ticks`

Options!
let string1 = "She said, \"I do not agree!\"";
let string2 = 'She said, "I don\'t agree!"';
let string3 = `She said, "I don't agree!"`;
*/

"use strict";

let name = "Hamlet";
let title = "Prince";
let country = "Denmark";
let string = `Hi, my name is ${name}, ${title} of ${country}!`
let string2 = "Hi, my name is " + name + ", title + " of " + country + "!";

/**
Draws canvas
*/
function setup() {
  createCanvas(500,500);

}


/**
Draws text
*/
function draw() {
  background(0);

}
