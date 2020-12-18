
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1050,580)

	boy = new Boy(350,650)

	ground = new Ground()

	mango1 = new Mango(1000,200,30)
	mango2 = new Mango(900,250,30)
	mango3 = new Mango(1100,200,30)
	mango4 = new Mango(1200,200,30)
	mango5 = new Mango(1000,300,30)
	mango6 = new Mango(1000,100,30)
	mango7 = new Mango(1150,150,30)
	mango8 = new Mango(1100,30,30)
	mango9 = new Mango(1100,130,30)
	mango10 = new Mango(1250,170,30)

	stone = new Stone(235,350,30)

	launcher = new Launcher(stone.body,{x:235,y:350})




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  tree.display()

  boy.display()

  ground.display()

  stone.display()

  launcher.display()


  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)





  
  drawSprites();
 
}

function mouseDragged() {
	 Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
	 }

	 function mouseReleased() {
		  launcher.fly();

	 }

	 function keyPressed() { 
		 if (keyCode === 32) { Matter.Body.setPosition(stone.body, {x:235, y:350})
		  launcher.attach(stone.body); } 
		}

		function detectCollision(lstone,lmango){ 
			mangoBodyPosition=lmango.body.position 
			stoneBodyPosition=lstone.body.position 
			var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
			if(distance<=lmango.r+lstone.r) { 
				//console.log(distance);
				 Matter.Body.setStatic(lmango.body,false);
			 } 
			}



