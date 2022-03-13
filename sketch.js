var garden,rabbit,apple,orangeL,redL,leafL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg,leafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  leafImg = loadImage("leaf.png")
}


function setup(){
  
  createCanvas(400,400);

garden=createSprite(200,200);
garden.addImage(gardenImg);



rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  



 var select_sprites = Math.round(random(1,4));

  


   if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
      createOrange();
     }else if(select_sprites == 3){
       createRed();
     }else{
     createLeaf();}
   }



}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}

function createLeaf() {
  leafL = createSprite(random(50, 350),40, 10, 10);
  leafL.addImage(leafImg);
  leafL.scale=0.06;
    leafL.velocityY = 3;
    leafL.lifetime = 150;
  }