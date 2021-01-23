var Bullet, Wall
var speed,weight,thickness
var damage 

function setup() {
  createCanvas(800,400);

  Bullet=createSprite(90, 200, 50, 50);
  Bullet.shapeColor="blue"

  thickness=random(22,83)

  Wall=createSprite(350,200,thickness,height/2)
  Wall.shapeColor="white"


  speed=random(1,10)

 

  weight=random(30,52)

  damage = 0.5 * weight * speed * speed/22509 * thickness
}

function draw() {
  background(0);
  
if(Bullet.collide(Wall)){
Bullet.velocityX=0
}
 Bullet.velocityX=speed;




if(damage<10){
Wall.shapeColor="red"
}

if(damage>5){
Wall.shapeColor="green"  
}
drawSprites();

}