const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
 
var drops = [];
var boy,thunder,boyImg;

function preload(){
  boyImg=loadImage("Boy.png");
 ThunderImg=loadImage("Thunder.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  
  createCanvas(600,700);

//create the boy
 boy=createSprite(250,520,30,50); 
// scale(0.8);  
 boy.addImage(boyImg);
}

function draw() {
  background(10);  
 
 Engine.update(engine);

 for (var j = 0; j < drops.length; j++) { 
  drops[j].display();
 }
  drops.push(new Drops(random(0,600),0));
 
//console.log(frameRate);
if(frameCount%200===0){
  var thunder=new Thunder(150,50);
  var c=1;
  console.log("satisfied condition");
}
else 
if(frameCount%200!=0 && frameCount%80===0 && c==1){
  thunder.hide();
  console.log("condition else")
}

drawSprites();
}