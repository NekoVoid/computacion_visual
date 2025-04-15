void setup(){
  size(400,400,P3D);
}
void draw(){
  background(255);
  rotateX(-PI/8);
  
  pushMatrix();
    translate(width/4, 7*height/8, 0);
    
    
    rotateY(-PI/4);
    
    rotateZ(PI*sin((float)millis()/1000.0));
    
    fill(255,0,0);
    
    for(int i = 0; i < 10; i++){
      box(100);
      translate(0,0,-150);
    }
  popMatrix();
  
  pushMatrix();
  
    translate(width/2,height/4,-100);
    
    fill(0,255,255);
    
    
    rotateY(PI*millis()/1000.0);
    
    scale(3,0.5,1);
    
    translate(0,100*sin(millis()/100.0),0);
    
    box(100);
  popMatrix();
}
