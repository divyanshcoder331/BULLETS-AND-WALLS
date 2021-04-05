var bullet,wall;

var speed,weight,thickness;

function setup() {

  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 50);
  
  wall=createSprite(1200,200,thickness,height/2);

  wall.shapeColor="white";
  
  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);

  bullet.velocityX=speed;

}

function draw() {
  
  background("black");  
 
  if(hasCollided(wall,bullet)){
    bullet.velocityX=0;
    
    
    var damage=0.5*speed*speed*weight/(thickness*thickness*thickness)

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(wall,bullet){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

