var bullet ,wall,wall2,wall3,bullet2,bullet3;
var speed,speed2,speed3,weight;
function setup() {
createCanvas(1600,600);


speed = random(5,10);
weight = random(400,1500);
speed2 = random(2,20);
speed3 = random(3,25);


wall = createSprite(870,300,50,600);
wall.shapeColor = 0;

wall2 = createSprite(200,200,1290,50);
wall2.shapeColor = 0

wall3 = createSprite(200,400,1290,50);
wall3.shapeColor = 0

bullet = createSprite(50,100,130,50);
bullet.velocityX = speed;
bullet.shapeColor = 0;


bullet2 = createSprite(50,280,130,50);
bullet2.velocityX = speed2;
bullet2.shapeColor = "orange"

bullet3 = createSprite(50,490,130,50);
bullet3.velocityX = speed3;
bullet3.shapeColor = "lightblue";

}


function draw() {

  background("red");



 isTouching();
  drawSprites();
}


function isTouching() {
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2) {
    bullet.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/500;
    
    if(deformation>290) {
      bullet.shapeColor = "green";
     
    }
    if(deformation<290 && deformation>190) {
      bullet.shapeColor = "yellow";
    }
    if(deformation<190) {
      bullet.shapeColor = "blue";
    }
  }
  
  
  
  if(wall.x - bullet2.x < bullet2.width/2 + wall.width/2) {
    bullet2.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/5000;
    
    if(deformation>290) {
      bullet2.shapeColor = "green";
     
    }
    if(deformation<290 && deformation>200) {
      bullet2.shapeColor = "yellow";
    }
    if(deformation<200) {
      bullet2.shapeColor = "blue";
    }
  }
  
  
  if(wall.x - bullet3.x < bullet3.width/2 + wall.width/2) {
    bullet3.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/2000;
    
    if(deformation>290) {
      bullet3.shapeColor = "green";
     
    }
    if(deformation<290 && deformation>200) {
     bullet3.shapeColor = "yellow";
    }
    if(deformation<200) {
      bullet3.shapeColor = "blue";
    }
  }
}
