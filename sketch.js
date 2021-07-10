var bg ,bgimg ;
var form;
var gameState="form";
var button,buttonImg;

function preload(){
bgimg=loadAnimation("images/background.png","images/bg 2.png","images/background.png")
buttonImg=loadImage("images/start.jpeg");
}

function setup(){
    createCanvas(windowWidth,windowHeight)
    bg=createSprite(windowWidth/2,windowHeight/2,30,30)
    
    button=createSprite(windowWidth/2+50,240);
    button.addImage(buttonImg);
    button.scale=0.4;
    form=new Form();
    form.display();

}

function draw(){
    
   // background(bgimg);
   if(gameState=="form"){
    form.display();
    bg.addAnimation("bg",bgimg);
    bg.scale=0.7;

   
   }
   

   if(gameState=="rules"){
       //background("blue");
   }
  
   drawSprites();
}