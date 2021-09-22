class Playing{
  constructor(){

  }
start(){
// background(invisibleGround)
//invisibleGround.visible = true;
Blyth.visible = true  

}
  play(){
if(gameState === 0){
 
dog1.visible= true;
dog2.visible = true;
  }
  
  }
       


jump(){
  if(keyDown("space")){
    Blyth.velocityY=-10
 }
 Blyth.velocityY=Blyth.velocityY+0.5
}
  

//drawSprites();
}