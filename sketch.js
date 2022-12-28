var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("assets/forestImg.jpg");
  bg2 = loadImage("assets/StarsImg.jpeg");
  bg3 = loadImage("assets/FlowersImg.jpg");
  bg4 = loadImage("assets/endImg.jpeg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score >=3||score >=6) {
    background(bg2)
    clues_1()
  }
  
  if(score >=6||score >=9) {
    background(bg3)
    clues_2()
  }
  
  if(score >=9) {
    background(bg4)
    fill("black")
    textSize(40);
    text("GREAT JOB!",250, 200);
    
  }
  drawSprites()
}