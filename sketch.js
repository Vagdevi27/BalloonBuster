var ground, groundImage;
var score =0;

function preload() {
  //load your images here 

  groundImage = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  redballoonImage = loadImage("red_balloon0.png");
  blueballoonImage = loadImage("blue_balloon0.png");
  pinkballoonImage = loadImage("pink_balloon0.png");
  greenballoonImage = loadImage("green_balloon0.png");
  arrowImage = loadImage("arrow0.png");

}

function setup() {
  createCanvas(600, 600);
  ground = createSprite(300, 10, 600, 20);
  ground.addImage(groundImage);
  ground.scale = 3;
  ground.velocityX = -4;

  bow = createSprite(500, 200, 10, 40);
  bow.addImage(bowImage);

  redB = createGroup();
  blueB = createGroup();
  pinkB = createGroup();
  greenB = createGroup();
  arrowB = createGroup();
}

function draw() {

  background("white");
  drawSprites();
  if (ground.x < 0) {
    ground.x = 300;
  }

  bow.y = World.mouseY;

  //add code here
  if (keyDown("space")) {
    createArrow();
  }
var number = Math.round(random(1,4));
  switch(number){
    case 1:
       blueBalloons();
       break;
    case 2: 
      redBalloons();
      break;
    case 3: 
      greenBalloons();
      break;
    case 4:
      pinkBalloons();
      break;
  }
  textSize(20);
  text("Score: " + score,500,50);
 
  if(arrowB.isTouching(redB)){
     redB.destroyEach();
     arrowB.destroyEach();
     score =score + 2;
     }
  
   
  if(arrowB.isTouching(pinkB)){
     pinkB.destroyEach();
     arrowB.destroyEach();
     score =score + 3;
     }
    
  if(arrowB.isTouching(greenB)){
     greenB.destroyEach();
     arrowB.destroyEach();
     score =score + 4;
     }
  
    
  if(arrowB.isTouching(blueB)){
     blueB.destroyEach();
     arrowB.destroyEach();
     score =score + 5;
     }
  

}

function createArrow() {
  arrow = createSprite(500, 200, 50, 10)
  arrow.addImage(arrowImage);

  arrow.velocityX = -6;
  arrow.scale = 0.4
  arrow.y = bow.y;
  arrowB.add(arrow);
}

function redBalloons() {
  if (frameCount % 80 === 0) {
    redballoon = createSprite(0, Math.round(random(50,350)), 50, 10)
    redballoon.addImage(redballoonImage);
    redballoon.velocityX = 6;
    redballoon.scale = 0.1;
    redballoon.lifetime = 100;
    redB.add(redballoon);
  }
}


function blueBalloons() {
  if (frameCount % 80 === 0) {
    blueballoon = createSprite(0,40, 50, 10)
    blueballoon.addImage(blueballoonImage);
    blueballoon.y = Math.round(random(50,350));
    blueballoon.velocityX = 6;
    blueballoon.scale = 0.1;
    blueballoon.lifetime = 100;
    blueB.add(blueballoon);
  }
}

function greenBalloons() {
  if (frameCount % 80 === 0) {
    greenballoon = createSprite(0, Math.round(random(50,350)), 50, 10)
    greenballoon.addImage(greenballoonImage);
    greenballoon.velocityX = 6;
    greenballoon.scale = 0.1;
    greenballoon.lifetime = 100;
    greenB.add(greenballoon);
  }
}

function pinkBalloons() {
  if (frameCount % 80 === 0) {
    pinkballoon = createSprite(0,200, 50, 10)
    pinkballoon.addImage(pinkballoonImage);
    pinkballoon.y = Math.round(random(50,350));
    pinkballoon.velocityX = 6;
    pinkballoon.scale = 1.3
    pinkballoon.lifetime = 100;
    pinkB.add(pinkballoon);

  }
}