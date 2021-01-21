var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadImage("fairyImage2.png");
	bgImg = loadImage("starryNight.jpg");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 
	fairy = createSprite(130, 520);
	fairy.addImage(fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.rectangle(650 , 30 , 5 ,5, {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  Engine.update(engine);
star.x=starBody.position.x;
star.y=starBody.position.y;

console.log(star.y);

   if(star.y > 470 && starBody.position.y > 470){
	 Matter.Body.setStatic(starBody,true);
	 fairyVoice.play();

   }

   if(keyDown(UP_ARROW)){
	Matter.Body.setStatic(starBody,false);
}


  if(keyDown(RIGHT_ARROW)){
	fairy.x = fairy.x + 20
}

if(keyDown(LEFT_ARROW)){
	fairy.x = fairy.x - 20
	
}
  
  drawSprites();

}

