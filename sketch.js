
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);


	bobobject1 =  new Bob (250,200,70,70,0);
  bobobject2 =  new Bob (320,200,70,70,0);
	bobobject3 =  new Bob (390,200,70,70,0);
	bobobject4 =  new Bob (460,200,70,70,0);
	bobobject5 =  new Bob (530,200,70,70,0);

    Roof1 = new Roof(400,100,650,30);

	rope1 = new Rope(bobobject1.body,Roof1.body,-70*2,0);
	rope2 = new Rope(bobobject2.body,Roof1.body,-70,0);
	rope3 = new Rope(bobobject3.body,Roof1.body,0*2,0);
	rope4 = new Rope(bobobject4.body,Roof1.body,70,0);
	rope5 = new Rope(bobobject5.body,Roof1.body,70*2,0);
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  drawSprites();
 
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();

  Roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed()
{
if (keyCode === LEFT_ARROW)
{
     Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-450,y:0});

}
}

