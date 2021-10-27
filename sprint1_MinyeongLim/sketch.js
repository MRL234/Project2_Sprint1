let song;

function setup() {
	song = loadSound('assets/assets_sounds_bubbles.mp3');
	createCanvas(windowWidth, windowHeight);
	background(0, 0, 0);

}

function mousePressed() {
	if (song.isPlaying()) {
		// .isPlaying() returns a boolean
		song.stop();
		background(0, 189, 255);
		noStroke();
		fill(255);
		ellipse(652, 444, 72, 72);
		fill(255);
		arc(879, 600, 380, 280, PI, TWO_PI);
		fill(255);
		ellipse(1110, 444, 72, 72);

	} else {
		song.play();
		background(255, 218, 0);
		noStroke();
		fill(255);
		ellipse(652, 444, 72, 72);
		fill(255);
		arc(879, 600, 380, 280, PI, TWO_PI);
		fill(255);
		ellipse(1110, 444, 72, 72);
	}

}
