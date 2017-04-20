function setup() {
  createCanvas(1280, 720);
}

function draw() {
  rect(mouseX,mouseY,50,50);
  stroke(255, 255, 255, 25);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill((mouseX / width) * 255, (mouseY / height) * 255, 0, 100);
  }
}
