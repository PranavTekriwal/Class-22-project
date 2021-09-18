const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;
var canvas;
var player;
var ground;



function preload() {
  backgroundImg = loadImage("./assets/background.png");
  groundImg = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  };

  ground = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, ground);

  player = Bodies.rectangle(250, ground.position.y - 160, 50, 180, options);
  World.add(world,player)
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  image(groundImg,ground.position.x,ground.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}




