function preload() {
  sound = loadSound('assets/Yugioh.mp3');
}

function setup() {
createCanvas (600,600);
frameRate (12)
   sound.setVolume(0.5);
  sound.play();
}

function draw() {
  background (198, 255, 26);
  fill(random(200,255),random(0,100), 0);//red bottom square
  ellipse(random(158,152), random(298,302), random(253,257), random(203,207), random(18,22));
  
  fill(random(200,255), 0,random(200,255));//fuchisa middle square
  ellipse(random(168,172), random(198,202),random(203,207),random(153,157),random(18,22));
  
   fill(0,random(150,205),random(200,255));//baby blue top square
  ellipse(random(198,202), random(98,102), random(103,107), random(153,157), random(18,25));
 
  fill (0, 0, 0)// left eye (black)
  ellipse(random(218,222), random(118,122), random(23,27), random(13,17));
  fill (0, 0, 0)// right eye (black)
  ellipse(random(273,277),random(138,142), random(23,27), random(13,17));
  fill (random(200,255),(90,130), 0)// nose (pumpkin)
  ellipse(random(233,237),random(158,162),random(13,16),random(32,37));
  fill (random(200,255),random(90,120), random(130,160))// mouth (cotton candy)
  ellipse(random(253,257),random(188,193), random(44,47),random(1,30));
  fill(random(1,150),0,random(100,200))
  text ("Ce n'est pas un bonhomme de neige, you boujy JERK",random(298,302),random(198,202),20)
}