
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground;
var ball1 , ball2 , ball3 , ball4 , ball5;
var chain1 , chain2 , chain3 , chain4 , chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400 , 100 , 400 , 20);
	ball1 = new Bob (250,300)
	chain1 = new Chain ( ball1.body ,ground.body , -150 , 0);

	ball2 = new Bob (300,300)
	chain2 = new Chain ( ball2.body ,ground.body , -100 , 0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ground.display();
  ball1.display();
  chain1.display();

  ball2.display();
  chain2.display();
}



