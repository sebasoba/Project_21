var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,15)
  thickness=random(22,83)
  
  bullet=createSprite(50,200,50,10);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX = speed;
}

function draw() {
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180)
    {
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<180)
    {
      bullet.shapeColor=color(0,255,0);
    }
    hasCollided();
  }
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
     return true
  }
  return false;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);


    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
}
  
  background(255,255,255);  
  drawSprites();
