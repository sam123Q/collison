var big, small;
function setup() {
  createCanvas(800,400);
  big = createSprite(400, 200, 50, 50);
  small = createSprite(200, 200, 30, 30);
  big.shapeColor="green";
  small.shapeColor="green";

}

function draw() {
  background(0); 
  console.log(big.x-small.x)
  big.x=World.mouseX;
  big.y=World.mouseY; 
  drawSprites();
  if(big.x-small.x<big.width/2+small.width/2 && small.x-big.x<big.width/2+small.width/2 && big.y-small.y<big.height/2+small.height/2 && small.y-big.y<small.height/2+big.height/2                                                         ){
    big.shapeColor="red";
    small.shapeColor="red";
  }
  else{
   
      big.shapeColor="green";
      small.shapeColor="green";
    
  }
}