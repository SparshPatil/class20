var movingRect;
var fixedRect;
function setup() {
  createCanvas(400,400);
  movingRect = createSprite(100, 100, 50, 80);//50
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect = createSprite(200,100,80,50);//80
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  //50/2+80/2 =25+40 = 65
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  //horizontally -dis btwn centres of 2 rectangles
  console.log(movingRect.x-fixedRect.x);
 
  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x -movingRect.x< movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y< movingRect.height/2+fixedRect.height/2&&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2)
    
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"; 
  }
  drawSprites();
}