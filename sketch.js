// eula
let button;
let wrds;
let eula = [{
  name: "g",
  color: "over"
}, {
  name: "gg",
  color: "overr"
}, {
  name: "ggg",
  color: "overrr"
}];

let randomIndex;
let animating = false;

function preload(){
  eula[0] = loadImage('gameover0.png')
  eula[1] = loadImage('gameover1.png')
  eula[2] = loadImage('gameover2.png')
  
}

function setup() {
  createCanvas(400, 400);
  background(300);
  textSize(32);
  
  text("SEIZURE WARNING", 50, 50);
  setInterval(changeBackground, 3000);

  var button = createButton('Don't click');
    button.parent ('button-holder');
    button.mousePressed(reset sketch);
}


function draw() {

  if (animating == true){
    ellipse(random(width), random(height), random(70,300));
  }
}

function changeBackground(){
  
  background(random(255), random(255), random(255));
    setInterval(changeBackground, 3000);
}
function randomizer(){
  
  animating = false;
   if (eula[0]){
      background(200,650,400);
 randomIndex = int(random(eula.length));
text(`${eula[randomIndex].name}ame

${eula[randomIndex].color}`, 50, 50);

eula.splice(randomIndex, 1);
console.log(eula);

} else {
  background(200,650,400);
  text("game over!", 50, 50);
}
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
 
}