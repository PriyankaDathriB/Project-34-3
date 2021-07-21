const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


// variables
var portalImg;
var heartImg;

var land1_Img, land2_Img;
var myEngine, myWorld, player;
var bgImg;
var portal;
var heart;
var life;
var reset;

// gamestates
var gameState = "play";


function preload(){
  land1_Img = loadImage("images/land1.png");
  land2_Img = loadAnimation("images/land1.png","images/land1.png");
  bgImg=loadImage("images/bg.png");
  portalImg=loadImage("images/portal.png");
  heartImg=loadImage("images/heart.png");
}

function setup(){
  var canvas = createCanvas(displayWidth, displayHeight);

  myEngine = Engine.create();
  myWorld = myEngine.world;

 
  //creating floating lands
  landCreation();
  obstacleCreation();

  portal= new Portal(width/2,50,100,100);
  
  player = new Player(52,650);

  heart = createSprite(30,35,10,10);
  heart.addImage(heartImg);
  heart.scale=0.4;

  life = 3;

}


function draw()
{
  Engine.update(myEngine);
  if(gameState === "play") {
    
    background(bgImg);

    bodiesDisplay();
    
    if(keyDown(RIGHT_ARROW)) {
      player.body.position.x += 0.2;
    }

    else if(keyDown(LEFT_ARROW)) {
      player.body.position.x -= 0.2;
    }

    if(keyWentDown(UP_ARROW)){
      player.body.position.y-=8;
    }
    if(keyWentUp(UP_ARROW)){
      player.body.position.y+=6;
    }

    var t = Matter.SAT.collides(player.body,portal.body)
    if(t.collided){
      gameState = "win";
    }

    if(life === 0){
      gameState = "end";
      bodiesDisplay();
    }
  }

  else if(gameState === "win") {
    background(0);
    fill("white");
    textSize(50);
    textAlign(CENTER);
    text("CONGRATULATIONS",width/2,height/2)
  }

  else {
    background(0);
    fill("white");
    textSize(50);
    textAlign(CENTER);
    text("TRY AGAIN",width/2,height/2)
  }

  if(keyDown(82)){
    reset();
  }
  
  fill("white");
  textSize(25);
  text("="+life,50,40);
  text("Press R to Reset",width-300,50)

  text(mouseX + "," + mouseY,mouseX,mouseY);

  drawSprites();
}
function reset(){
  life = 3;
  gameState = "play";
  obstacleCreation();
  player.body.position.x = 52;
  player.body.position.y = 650;
}

