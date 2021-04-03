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

function setup() {
  createCanvas(400, 400);

randomIndex = int(random(dogs.length));

console.log(eula[randomIndex].name);
text(eula[randomIndex].name, 50, 50);

eula.splice(randomIndex, 1);
console.log(eula);

}


function draw() {
  background(200,650,400);
}

function mousePressed() {
  background(random(200, 650,400));
  randomIndex = int(random(dogs.length));
  text(eula[randomIndex].name, 50, 50);
  eula.splice(randomIndex, 1);

}
