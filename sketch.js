let angleMouth = 10;
let heckYes = false;
let x = 10
let eyebrows;
let deltaY = 0;
let deltaX = 0;



function setup() {

  createCanvas(400, 400);
  angleMode(DEGREES);
  
  eyebrows = new Eyebrows(width * .01, height * .01)
  
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

   background(120);
  
let x = map(mouseX, 0, width, 0, 255);
  
background(x,200,185);

  
  // messing around with this since I didn't have xPos and yPos for the class
  translate(deltaY, 0);
  deltaY++;
  if (deltaY + 50 > width){
    deltaY = -145;
  }
  
  

  eyebrows.display();
  eyebrows.move()
  
  drawHead();
  drawEars();
  drawNeck();
  drawBody();
  drawEyes();
  drawMouth(angleMouth);
  drawEyebrows();
  drawDiploma();
  drawNose();
  drawPupils();
 

  if (heckYes == true){
    circle(width/2, height/2, 50);
}
}
function mousePressed() {


  if (mouseX > width * 0.3 && mouseX < width * 0.6 && mouseY > height * 0.3 && mouseY < height * .6) {
    angleMouth = 15;
  }

  else if (mouseX < width * .2 || mouseX > width * .6 ){
      heckYes = true;
  }

}

function drawEars() {

  // ears
  fill(249, 209, 126)
  ellipse(280, 120, 60, 60)
  fill(249, 209, 126)
  ellipse(120, 120, 60, 60)

}

function drawHead() {

  // head
  noStroke()
  fill(249, 209, 126)
  ellipse(200, 200, 200, 200)

}

function drawMouth() {

  // mouth
  fill(0, 0, 0)
  rect(170, 230, 60, 5)
}



function drawDiploma() {
  // diploma
  fill(255, 255, 255)
  strokeWeight(3)
  stroke(50)
  rect(70, 330, 30, 90)

}

function drawBody() {
  // body
  fill(249, 209, 126)
  rect(105, 320, 190, 90)


}

function drawNose() {
  //nose
  fill(0, 0, 0)
  rect(195, 195, 10, 10, )

}

function drawEyes() {

  // eyes
  fill(255, 255, 255)
  ellipse(250, 180, 55, 35)
  ellipse(150, 180, 55, 35)

}

function drawNeck() {

  // neck
  fill(249, 209, 126)
  rect(170, 270, 60, 60)
}

function drawPupils() {

  fill(0, 0, 0)
  ellipse(x, 180, 8, 8)
  ellipse(x, 180, 8, 8)
  x += 5;
  
if (x > width + 10) {
  x = -10; 
}
  
  
}