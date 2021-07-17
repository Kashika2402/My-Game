var bg,bg2,bg3,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("planet1.jpg");
  //load image for the treasure background
  bg2= loadImage("planet2.jpg");

  bg3= loadImage("planet3.jpg");
}

function setup() {
  createCanvas(1200,800);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background
  

  if(score === 3) {
    clear()
   background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}