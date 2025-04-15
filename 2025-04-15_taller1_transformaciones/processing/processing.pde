void setup(){
  size(400,400,P3D);
}
void draw(){
  // Set the background color to white and the camera position
  background(255);
  rotateX(-PI/8);
  
  pushMatrix();
    // Translate to lower left corner of the screen
    translate(width/4, 7*height/8, 0);
    
    // Position reference frame
    rotateY(-PI/4);
    
    // Rotate animation
    rotateZ(PI*sin((float)millis()/1000.0));
    
    //set box color to red
    fill(255,0,0);
    
    // draw red boxes
    for(int i = 0; i < 10; i++){
      // draw boxes
      box(100);

      //translate back
      translate(0,0,-150);
    }
  popMatrix();
  
  pushMatrix();
    // Translate to upper middle of the screen
    translate(width/2,height/4,-100);
    
    //set box color to cyan
    fill(0,255,255);
    
    // Make box spin
    rotateY(PI*millis()/1000.0);
    
    // Scale into a "plank"
    scale(3,0.5,1);
    
    // make box bob sinusoidally
    translate(0,100*sin(millis()/100.0),0);
    
    // draw box
    box(100);
  popMatrix();
}
