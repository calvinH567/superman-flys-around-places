const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  brick1 = new Brick(300,600,50,50)
  Hero = new hero(100,200,250,125);
 // test = new Rock(400,200,50,10);
  ground = new Ground(1500,800,3000,100);
  fly = new SlingShot(Hero.body,{x:1000,y:100});
 
  Engine.run(engine);
}

function draw() {
 Engine.update(engine);
  background(0);
  Hero.display();
  ground.display();
  fly.display();
  
  brick1.display()
  //test.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(Hero.body,{x:mouseX,y:mouseY})
}
