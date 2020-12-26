
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var divisions = []
var plinkos = []
var particle

var divisionHeight = 300;

var score = 0
var count = 0
var gameState = "start";

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  ground = new Ground (400,790,1000,20)
  stand1 = new Ground (5,400,2,800)
  stand2 = new Ground (795,400,2,800)




  for (var k = 0 ; k <=width ; k = k + 80)  {

   divisions.push(new Division (k , height-divisionHeight/2 , 10 , divisionHeight));

  }

  for (var j = 40 ; j <=width ; j=j + 50) {
    plinkos.push(new Plinkos (j,75,10));
  }
  for (var j = 15; j <=width-10 ; j=j + 50){
    plinkos.push(new Plinkos(j,175,10));
  }  
  for (var j = 40; j <=width; j=j + 50){
    plinkos.push(new Plinkos(j,275,10));
  }
  for (var j = 15; j <=width-10 ; j=j + 50){
    plinkos.push(new Plinkos(j,375,10));


	
}
}


function draw() {


  rectMode(CENTER);
  background(0);

  textSize(35)
  fill("white")
  text("Score : ",score,200,400)

  
  textSize(35)
  fill("white")

  text("500",10,550)
  text("500",90,550)
  text("500",170,550)
  text("500",250,550)
  text("100",330,550)
  text("100",410,550)
  text("100",490,550)
  text("200",570,550)
  text("200",650,550)
  text("200",730,550)

	Engine.update(engine);

  if (particle){

    particle.display();

  if (particle.body.position.y>760){
    if (particle.body.position.x>300){
       score = score + 500
       particle - null
       if(count >= 5) gamestate = "end";
    }
  }
  else if (particle.body.position<600 && particle.body.position>301){
    score = score + 100
    particle = null
    if(count >= 5) gamestate = "end";
  }

  else if (particle.body.position<900 && particle.body.position>601){
    score = score + 200
    particle = null
    if(count >= 5) gamestate = "end";

  }
}


  for (var k = 0 ; k < divisions.length ; k ++) {
    
    divisions[k].display();

  }

  for ( var i = 0; i < plinkos.length ; i ++){

    plinkos[i].display();

  }



  /*for ( var j = 0; j < particles.length ; j ++ ) {

    particles[j].display();

  }*/

ground.display();
stand1.display();
stand2.display();
  


}

function mousePressed(){
  if(gamState === "end"){
    count++;
    particle = new Particles (mouseX,10,10,10)
  }
}

