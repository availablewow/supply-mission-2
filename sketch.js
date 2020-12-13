var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	backgroundImg = loadImage("Background 6.jpg");
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	Background = createSprite(400,250,800,500);
	Background.addImage(backgroundImg);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.05

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	ground_ = new Ground(400, 445, 800, 10)
	fill(199, 223, 61);
	stroke(199, 223, 61);
	leftWall = new Ground(180,389,20,100);
	rightWall = new Ground(310,389,20,100);
	bottomWall = new Ground(240,429,120,20);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, height-35, width, 100 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
  push();
  fill("green");
  stroke("green");
  ground_.display();
  pop();
  leftWall.display();
  rightWall.display();
  bottomWall.display();
  //package.translate(pos.x, pos.y);

  if(keyDown("LEFT_ARROW")){
	  helicopterSprite.x = helicopterSprite.x-50
	  Matter.Body.translate(packageBody,{x:-50,y:0});
  }
  if(keyDown("RIGHT_ARROW")){
	helicopterSprite.x = helicopterSprite.x+50
	Matter.Body.translate(packageBody,{x:50,y:0});
  }
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false);
  }
}


