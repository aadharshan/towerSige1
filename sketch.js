const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var ground;
var  box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var polygon,polygonImage;
var sling;

function preload() {
    polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    stand1 = new Ground(600,300,250,20)
    
    stand2 = new Ground(1000,200,250,20)
    box1 = new Box(500,265,50,50);
    box2 = new Box(550,265,50,50);
    box3 = new Box(600,265,50,50);
    box4 = new Box(650,265,50,50);
    box5 = new Box(700,265,50,50);
    box6 = new Box(550,215,50,50);
    box7 = new Box(600,215,50,50);
    box8 = new Box(650,215,50,50);
    box9 = new Box(600,165,50,50);
    box10 = new Box(900,165,50,50);
    box11= new Box(950,165,50,50);
    box12= new Box(1000,165,50,50);
    box13= new Box(1050,165,50,50);
    box14= new Box(1100,165,50,50);
    box15= new Box(950,115,50,50);
    box16= new Box(1000,115,50,50);
    box17= new Box(1050,115,50,50);
    box18= new Box(1000,65,50,50);
    polygon = Bodies.circle(200,20,60);
    World.add(world,polygon);
    sling = new SlingShot(polygon,{x:200,y:200})
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    stand1.display();
    stand2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,70,70);
    sling.display();
    
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}


function mouseReleased(){
    sling.fly();
}


function keyPressed(){
                                   
}
