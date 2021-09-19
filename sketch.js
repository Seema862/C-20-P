var bgImg;
var cat;
var mouse;

function preload() {
    bgImg = loadImage("images/garden.png");
    cating1 = loadImage("images/cat1.png");
    mousing1 = loadImage("images/mouse1.png");
    cating2 = loadImage("images/cat2.png","images/cat3.png");
    mousing2 = loadImage("images/mouse2.png","images/mouse3.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(300,200,30,20);
    mouse = createSprite(300,400,40,40);

}

if (mouse.x - cat.x < cat.width/2 + mouse.width/2
    && cat.x - mouse.x < cat.width/2 + mouse.width/2
    && mouse.y - cat.y < cat.height/2 + mousec.height/2
    && cat.y - mouse.y < cat.height/2 + mouse.height/2){
        mouse.changeAnimation("mouseTeasing");
cat.changeAnimation("cat2.png");
    }


function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x= mouse.x < (cat.width-mouse.width)/2){

    }

    drawSprites();
    keyPressed.display();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mousing2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }

  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mousing2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
}
}
