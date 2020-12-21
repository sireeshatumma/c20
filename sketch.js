
var fixedRect, movingRect


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(600, 200, 50, 100);
  movingRect=createSprite(100, 200, 100, 50);
  fixedRect.shapeColor='green';
  movingRect.shapeColor='green';

  fixedRect.velocityX= - 4;
  movingRect.velocityX= 4 ;
}

function draw() {
  background(0,255,255);
  // movingRect.x= mouseX;
  // movingRect.y=mouseY;
  // && ||
  // difference between x position === half of sum of their widths
if(fixedRect.x-movingRect.x < fixedRect.width/2+movingRect .width/2
  && movingRect.x-fixedRect.x<fixedRect.width/2+movingRect .width/2
  && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect .height/2
  && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect .height/2
  ){
  // fixedRect.shapeColor='red';
  // movingRect.shapeColor='red';
  fixedRect.velocityX= fixedRect.velocityX* -1;
  movingRect.velocityX= movingRect.velocityX* -1;


// fixedRect.x= 100

}
// else{
//   fixedRect.shapeColor='green';
//   movingRect.shapeColor='green';
// }

  drawSprites();
}