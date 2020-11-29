var monkey,banana,banana1





function preload () {
monkeyan = loadAnimation(    "sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
banana1 = loadImage("banana.png")
  
obstacle1 = loadImage("obstacle.png")
}



function setup ()   {
  monkey = createSprite(50,200,30,30)
  monkey.addAnimation("mon",monkeyan)
  monkey.scale = 0.1
  ground = createSprite(400,380,900,20)
  ground.velocityX = -5
  
  
  obstaclesGroup = new Group()
  foodGroup = new Group()
  
  
}


function draw  () {
  background("white")
  
  if(keyDown("space")) {
    
    monkey.velocityY = -18
    
  }
   monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  
  
  if(ground.x< 0) {
    
    ground.x = ground.width/2
  }
  
  
  if(foodGroup.isTouching(monkey)){
    
    foodGroup.destroyEach();
  }
  
  if(obstaclesGroup.isTouching(monkey)){
    
    monkey.velocityY = 0
    ground.velocityX = 0
    foodGroup.setVelocityXEach(0)
    obstaclesGroup.setVelocityXEach(0)
    foodGroup.setLifetimeEach(-1)
    obstaclesGroup.setLifetimeEach(-1)
    
    
    
  }
  
  spawnFood()
  obstacles()
 ground.velocityX = -5
  drawSprites()
}


function spawnFood ()  {
  
  if (frameCount % 80 === 0)   {
  banana = createSprite(300,140,10,10)
  banana.addImage(banana1)
  banana.lifetime = 100
  banana.velocityX = -3
  banana.scale = 0.1
  foodGroup.add(banana)
  }
}

function obstacles() {
  if (frameCount % 160 === 0) {
  obstacle = createSprite(300,350,20,20)
  obstacle.addImage(obstacle1)
  obstacle.lifetime = 100
  obstacle.velocityX = -4
  obstacle.scale = 0.1
  obstaclesGroup.add(obstacle)
      
  
  }
  
  
  
}


