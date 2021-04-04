// eula
let eula = [{
  name: "eula1",
  color: "blue"
}, {
  name: "eula2",
  color: "white"
}, {
  name: "eula3",
  color: "black"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(400, 400);
  background(300);
  textSize(32);
  
  text("SEIZURE WARNING", 50, 50);
  setInterval(changeBackground, 3000);


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
text(`${eula[randomIndex].name}'s favorite color is

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