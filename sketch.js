var movingrect,fixedrect;


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(400, 200, 70, 50);
  fixedrect=createSprite(300,300,60,40);
  movingrect.shapeColor="orange";
  fixedrect.shapeColor="orange";
  
}

function draw() {
  background(255,255,255);
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2)
    {
      movingrect.shapeColor="yellow";
  fixedrect.shapeColor="yellow";
    }
    else{
      movingrect.shapeColor="orange";
  fixedrect.shapeColor="orange";
    }
  drawSprites();
}