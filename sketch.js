
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var Bob1,Bob2,Bob3,Bob4,Bob5
var stand,sling1,sling2,sling3,sling4,sling5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  Bob1= new Bob(400, 400 , 50)
  Bob2= new Bob(450 , 400 , 50)
  Bob3= new Bob(500 , 400 , 50)
  Bob4= new Bob(550 , 400 , 50)
  Bob5= new Bob(600 , 400 , 50)
  stand= new Stand(350 , 50 , 500 ,20)
  sling1= new Suspender(Bob1.body , stand.body, -50*2 , 0)
  sling2= new Suspender(Bob2.body , stand.body,-25*2,0)
  sling3= new Suspender(Bob3.body , stand.body,0,0)
  sling4= new Suspender(Bob4.body , stand.body,25*2,0) 
  sling5= new Suspender(Bob5.body , stand.body,100,0)
	Engine.run(engine);
  
}


function draw() {
 
  background("yewllo");
  rectMode(CENTER);
  drawSprites();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  stand.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}



