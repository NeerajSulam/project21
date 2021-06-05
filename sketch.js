var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    surface1 = createSprite(100,590,150,50);
    surface1.shapeColor = "red";

    surface2 = createSprite(260,590,150,50);
    surface2.shapeColor = "green";

    surface3 = createSprite(420,590,150,50);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(580,590,150,50);
    surface4.shapeColor = "blue";

    //create box sprite and give velocity
    box = createSprite(350,100,50,50);
    box.velocityX = 5;
    box.velocityY = 5;
}

function draw() {
    background("black");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "blue"
        music.play();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "yellow"
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "green"
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }
    
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "red"
        music.play();
    }
    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);

    
    drawSprites();
}
