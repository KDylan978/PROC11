
function preload()
{
  sea_image = loadImage("sea.png");
  ship_animation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup()
{
  //canvas(espacio de trabajo)
  createCanvas(400,400);
  //haciendo el fondo y agregándole su imagen
  sea = createSprite(200, 200, 10, 10);
  sea.addImage("sea", sea_image);
  sea.scale = 0.25;
  //haciendo el barco y agregándole animación
  ship = createSprite(75, 220, 50, 50);
  ship.addAnimation("traveling", ship_animation);
  ship.scale = 0.15;
  //velocidad del fondo
  sea.velocityX = -2;
}

function draw() 
{
  background("white");
  if(sea.x < 0)
  {
    sea.x = sea.width/8.25;
  }
  drawSprites();
}