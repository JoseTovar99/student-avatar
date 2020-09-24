class Eyebrows {
  constructor() {
    
    
  }
 
  display() {
     // eye brows
  push();
  translate(width * .01, height * .01);
  fill(0, 0, 0)
  rect(120, 140, 60, 10)
  rect(220, 140, 60, 10)
  pop();
    
    
  }
  
  move() {
    // this.yPos += 2
    
  }
  
  
}



function drawEyebrows() {

  push();
  translate(width * .01, height * .01);
  fill(0, 0, 0)
  rect(120, 140, 60, 10)
  rect(220, 140, 60, 10)
  pop();
}