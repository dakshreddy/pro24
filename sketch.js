
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,wall,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	var ball  = circle (200,200,100)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

ball.display();

