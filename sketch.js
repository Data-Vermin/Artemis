let starsX= [];

let starsY= [];

let starblink = [];

let Orbet = 0;

let radius = 200;

let img;

let font;

function preload() {
  font = loadFont('assets/inconsolata.otf');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  img = loadImage('moon/moonSurface0.jpg');

  textFont(font);
  textSize(20);
  textAlign(CENTER, CENTER);

  //Array Setup For The drawStars Function
  for (let i = 0; i < 150; i++){
    starsX[i] = random(width);
    starsY[i] = random(height);
    starblink[i] = Math.floor(random(0,10));
  }
}

function draw() {
  //Orbet Code To Get It To Move Around The Screen
  Orbet += -0.1;
  Orbet = Orbet % -30;
  console.log(Orbet);

  //Colors The Background
  background(42, 1, 52);

  //Text For What Phase The Moon IS In
  switch(Math.floor(Orbet/-7.5)){
    case 0:
      fill(0, 200, 0);
      text('First Quarter', -300, -350);
    break;
    case 2:
      fill(0, 200, 0);
      text('Third Quarter', -300, -350);
    break;
    case 1:
      fill(0, 200, 0);
      text('Full Moon', -300, -350);
    break;
    case 3:
      fill(0, 200, 0);
      text('New Moon', -300, -350);
    break;
    default:
  }

  //Draws The Moon Going Around The Orbet 
  drawMoon(Orbet);

  //This Gets The Stars To Blink Randomly
  if(frameCount % 15 ==0){
    for (let i = 0; i < 150; i++){
      starblink[i] = Math.floor(random(0,10));
    }
  }
  drawStars();
}

function drawMoon(phase){
  //This Sets The Rotation Speed For The Moon
  let y = 0;
  let x;
  let rotation = map(phase, 0, 30, 0, -TWO_PI);
  y = sin(rotation)* radius;
  x = cos(rotation)* radius;
  
  //Moon Spinning
  let spin = map(phase, 0, 30, 0, TWO_PI);
  push();
  translate(x, y);
  rotateY(spin);
  texture(img);
  sphere(50);
  pop();
  noStroke();
}

function drawStars(){
  //Drawing The Stars And The If Statent For The Blinking
  push();
  translate(-width/2, -height/2);
  for (let i = 0; i < 150; i++){
    if(starblink[i] ==1){
      fill(255);
    } else{
      fill(255,255,153);
    }
    ellipse(starsX[i], starsY[i], 5, 5);
  }
  pop();
}