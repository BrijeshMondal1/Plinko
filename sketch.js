const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

var ground, wall1, wall2;

var particle = [];
var plinko = [];
var division = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;

  //creating bodies

  ground = new Ground(width/2, height - 10, width, 20);
  wall1 = new Ground(width - 5, height/2, 10, height);
  wall2 = new Ground(5, height/2, 10, height);

  for(var i = 5; i <= width; i = i + (width/6 - 2)){
 
     division.push(new divisions(i , height - (220/2)));

  }

  //creating plinkoes
  for(var i = 50; i <= width - 50; i = i + 60){

     plinko.push(new plinkoes(i, 75));
     plinko.push(new plinkoes(i, 275));

  }

  for(var i = 20; i <= width - 20; i = i + 60){

     plinko.push(new plinkoes(i, 175));

  }

}

function draw() {
  background("black"); 
  
  Engine.update(engine);
  
  for(var d = 0; d < division.length; d++){

     division[d].display();

  }

  
  ground.display();

  for(var p = 0; p < plinko.length; p++){

     plinko[p].display();

  }

  if(frameCount % 50 === 0){
    
    let x = Math.round(random(80, width - 80));

    particle.push(new particles(x, - 10));

 }


  for(var pa = 0; pa < particle.length; pa++){

    particle[pa].display();

 }

  drawSprites();
}