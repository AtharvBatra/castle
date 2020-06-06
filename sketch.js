const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(400, height, 1000, 20);
    stick1 = new Stick(250, 100, 10, 310);
    stick2 = new Stick(280, 120, 50, 270);
    stick3 = new Stick(335, 195, 60, 120);
    stick4 = new Stick(395, 195, 60, 120);
    stick5 = new Stick(450, 120, 50, 270);
    stick6 = new Stick(480, 100, 10, 310);
  
    cap = new Cap(150, -100,175,-80, 200,-20);
    

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(0, 0, 0);  
  //console.log(mouseX);
  //console.log(mouseY);
  ground.display();
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  cap.display();
}