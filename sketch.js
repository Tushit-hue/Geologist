
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1250, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	plane = new Ground();
	hammer = new Hammer(200,50);
	iron = new Iron(600,200)
	rubber = new Rubber(900,300)
	stone = new Stone(200,100)
	sand1 = new Sand(1000,100)
	sand2 = new Sand(1010,100)
	sand3 = new Sand(1020,100)
	sand4 = new Sand(1030,100)
	sand5 = new Sand(1040,100)
	sand6 = new Sand(1050,100)
}


function draw() {
  rectMode(CENTER);
  background('lightblue');
  plane.display();
  hammer.display();
  iron.display();
  rubber.display();
  stone.display();
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display();
  sand5.display()
  sand6.display()


  
 
}



