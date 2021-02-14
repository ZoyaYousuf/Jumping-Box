var canvas;
var music;
var ground1;
var ground2;
var ground3;
var ground4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
      edges = createEdgeSprites();


    //create box sprite and give velocity
    ground1 = createSprite(70,575,150,50);
    ground1.shapeColor="red";
    
    ground2 = createSprite(220,575,150,50);
    ground2.shapeColor="yellow";

    ground3 = createSprite(370,575,150,50);
    ground3.shapeColor="green";

    ground4 = createSprite(520,575,150,50);
    ground4.shapeColor="blue";

    box = createSprite(random(20,260));
    box.velocityY = 5;
    box.velocityX = -2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
      box.bounceOff(edges);

    drawSprites();
    //add condition to check if box touching surface and make it box
     if(box.isTouching(ground1)){
         box.bounceOff(ground1);
         box.shapeColor="red";
         music.play();
    }

     if(box.isTouching(ground2)){
         box.bounceOff(ground2);
         box.shapeColor="yellow";
         music.play();
     }

     if(box.isTouching(ground3)){
         box.bounceOff(ground3);
         box.shapeColor="green";
         music.play();
     }

     if(box.isTouching(ground4)){
         box.bounceOff(ground4);
         box.shapeColor="blue";
         music.play();
     }

}
