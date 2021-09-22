var dog;
var bg1;
var Blyth;
var dogimg;
var dog2;
var dog2img;
var Pgrass1
var Pbackground1;
var hellbg;
var hellbgimg;
var playing;
var evil;
var evilimg;
var good;
var goodimg;
var  invisibleGround;
var gameState = 0;
function preload(){

  Pgrass1=loadImage("images/grass1.jpg")
  dogimg=loadImage("images/Husky.png")
  dog2img=loadImage("images/evil Husky.png")
  hellbgimg=loadImage("images/hellbg.jpg")
  Pbackground1=loadImage("images/paradise1.jpg")
  good=loadAnimation("images/good1.png","images/good2.png","images/good3.png","images/good4.png")
  

  
}

function setup() {

  createCanvas(800,400);
  background(Pgrass1); 
  
  dog1 = createSprite(300, 200, 50, 50);
  dog1.addImage(dogimg);
  dog1.visible = false;

  dog2 = createSprite(500, 300, 50, 50);
  dog2.addImage(dog2img)
  dog2.visible = false;
  
//   invisibleGround=createSprite(0.0,800,400) ;
//   invisibleGround.visible = false;
// invisibleGround.velocityX= -3;
// invisibleGround.addImage(Pbackground1)
  // bg1=createSprite(0,0,800,400);
  // bg1.visible = false;
  // bg1.velocity = -4;

  Blyth=createSprite(100,300,20,20); 
  Blyth.addAnimation("running",good)
  Blyth.visible = false
    //   bg1.scale=2
    //  bg1.addImage(Pbackground1)
  button=new Button();
  playing=new Playing();




}


function draw() {
//background(255)
  button.display()
  playing.play();

if(gameState===1){
clear();

 //bg1.visible= true;
 //invisibleGround.visible =true;

 playing.start();


 // Blyth.collide(invisibleGround)
    //   if(invisibleGround.x<0){
    // invisibleGround.x =invisibleGround.width/2
    //    }
playing.jump()
}

// playing.jump();
  drawSprites();
}