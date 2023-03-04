var sea , rightBoundary;
var seaImg , shipImg;

function preload(){

seaImg = loadImage ("sea.png");
shipimg = loadAnimation("ship-1.png","ship-2.png");
}
function setup(){
  createCanvas(400,400);
  sea = createSprite (150,150);
  sea.addImage(seaImg);
  sea.velocityX=-2;
  sea.scale=1.2;

  ship = createSprite (130,360);
  ship.addAnimation (shipImg);
  ship.scale = 1;

  rightBoundary = createSprite ( 350,350,20,500);
  rightBoundary.visible = false;

}

function draw() {
  background("blue");

  ship.x = World.mouseX;
  edges = createEdgeSprites();
  ship.collide(edges);
  ship.collide(rightBoundary);
  if(sea.x >350){
    sea.x = sea.widht / 2;
    }

    drawSprites();

 
}
