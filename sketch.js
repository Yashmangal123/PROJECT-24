
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper;
var dustbin1,dustbin2,dustbin3;
var ground;

function setup() {
	var canvas = createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,690,20);

	dustbin1 = new Dustbin(1000,650,10,100)
	dustbin2 = new Dustbin(1100,650,10,100);
	dustbin3 = new Dustbin(1050,685,100,10);

	ground = new Ground(600,695,1200,10);
	
}


function draw() {
  background(0);
	Engine.update(engine);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyWentDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


