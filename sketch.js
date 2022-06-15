
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle=60;
var poly;
var rock;
var wall;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var ball_options = {
		restitution : 0.95,
		frictionAir : 0.01
	  }
	
	  var rock_options = {
		restitution : 0.90,
	  }
	
	  var ground_options = {
		restitution : 1
	  }

	  var gr_op = {
		  isStatic: true
	  }
	
	  
	
	  ball = Bodies.circle(100,10,20,ball_options);
	  World.add(world,ball);
	
	  rock = Bodies.circle(300,10,30,rock_options);
	  World.add(world,rock);
	
	  ground = Bodies.rectangle(200,700,400,20,gr_op);
	  World.add(world,ground);
	
	  wall = Bodies.rectangle(200,350,30,20,ground_options);
	  World.add(world,wall);
	  
	  
	  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);


  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,30);
  rect(wall.position.x,wall.position.y,10,20);
  
  drawSprites();
 
}



