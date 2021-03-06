const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bgImg
var tower, towerImg;
var cannon
function preload() {
 bgImg=loadImage("assets/background.gif")
 towerImg=loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  cannon=new Cannon(180,110,130,100,15)
  
  options={
    isStatic:true
   }
  tower=Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)
  
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
}

function draw() {

  image(bgImg, 0, 0, 1200, 600)
  Engine.update(engine);
  push()  //Add new properties
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,160,310) 
  pop() //Remove the last added property
 rect(ground.position.x, ground.position.y,width*2,1);
  
   cannon.display()
}
