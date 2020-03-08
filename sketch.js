
var r=123;
var g=201;
var b=65;
function setup()
{
  createCanvas(1200,255);
}


function draw()
{
 fill ("blue");
 ellipse(mouseX,mouseY,30);
  r = map(mouseX,0,1200,0,255);
  g = map(mouseX,0,1200,0,200);
  b = map(mouseX,0,1000,0,230);
  background(rgb(r, g, 0));
  console.log(r);
  console.log(g);
  fill ("blue");
  ellipse(mouseX,mouseY,30);
}