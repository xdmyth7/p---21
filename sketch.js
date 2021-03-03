var canvas;
var music;
var fixSprite1, fixSprite2, fixSprite3, fixSprite4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    moovingSprite = createSprite(random(10,750),300,20,20)
    moovingSprite.shapeColor="white";
    moovingSprite.velocityX=3;
    moovingSprite.velocityY=3;

    //create box sprite and give velocity
    fixSprite1 = createSprite(100,590,180,20);
    fixSprite1.shapeColor="red";

    fixSprite2 = createSprite(300,590,180,20);
    fixSprite2.shapeColor="green";

    fixSprite3 = createSprite(500,590,180,20);
    fixSprite3.shapeColor="blue";

    fixSprite4 = createSprite(700,590,180,20);
    fixSprite4.shapeColor="yellow";

}

function draw() {
    background(rgb(169,169,169));
    
    if(moovingSprite.x<0) {
       music.stop();
       moovingSprite.velocityX=3;
    }else if(moovingSprite.x>800){
             music.stop;
             moovingSprite.velocityX=-3;
    }

if(isTouching(moovingSprite,fixSprite4)){
   music.play()
   moovingSprite.shapeColor="yellow";
   bounceOff(moovingSprite,fixSprite4)
}

else if(isTouching(moovingSprite,fixSprite3)){
        music.play()
        moovingSprite.shape="blue";
        bounceOff(moovingSprite,fixSprite3);
}

else if(isTouching(moovingSprite,fixSprite2)){
    music.play()
    moovingSprite.shape="green";
    bounceOff(moovingSprite,fixSprite2);
}

else if(isTouching(moovingSprite,fixSprite1)){
    music.play()
    moovingSprite.shape="red";
    bounceOff(moovingSprite,fixSprite1);
}


    //add condition to check if box touching surface and make it box
}
