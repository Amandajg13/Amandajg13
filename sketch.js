function setup() {
  createCanvas(200, 200);
  song = loadSound('Rain on Me.mp3', loaded);
  song.setVolume(0.5);
  sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
}

function loaded() {
  song.play();
}

function draw() {
  background(random(255));
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());
}
