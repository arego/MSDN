function create_canvas() {
	var ctx = canvas.getContext("2d");

	//first line
	ctx.lineWidth = 2;
	ctx.lineCap = "butt";
	ctx.lineJoin = "miter";
	ctx.beginPath();
	ctx.moveTo(50, 50);
	ctx.lineTo(600, 50);
	ctx.lineTo(600, 530);
	ctx.lineTo(300, 530);
	ctx.closePath();
	ctx.strokeStyle = "rgba(0, 0, 0, 0.7)";
	ctx.stroke();

	//second line
	ctx.lineWidth = 2;
	ctx.lineCap = "butt";
	ctx.lineJoin = "miter";
	ctx.beginPath();
	ctx.moveTo(325, 50);
	ctx.lineTo(450, 530);
	ctx.stroke();

	//third line
	ctx.lineWidth = 2;
	ctx.lineCap = "butt";
	ctx.lineJoin = "miter";
	ctx.beginPath();
	ctx.moveTo(133, 210);
	ctx.lineTo(600, 210);
	ctx.stroke();

	//4th line
	ctx.lineWidth = 2;
	ctx.lineCap = "butt";
	ctx.lineJoin = "miter";
	ctx.beginPath();
	ctx.moveTo(216, 370);
	ctx.lineTo(600, 370);
	ctx.stroke();

	ctx.font = '18px Arial';
	ctx.fillText("i", 22, 20);
	ctx.fillText("y", 70, 20);
	ctx.fillText("ɨ", 305, 20);
	ctx.fillText("ʉ", 350, 20);
	ctx.fillText("ɯ", 568, 20);
	ctx.fillText("u", 620, 20);
	ctx.fillText("ɪ", 182, 90);
	ctx.fillText("ʏ", 230, 90);
	ctx.fillText("ɪ̈", 323, 90);
	ctx.fillText("ʊ̈", 370, 90);
	ctx.fillText("ʊ", 470, 90);
	ctx.fillText("e", 100, 180);
	ctx.fillText("ø", 150, 180);
	ctx.fillText("ɘ", 340, 180);
	ctx.fillText("ɵ", 390, 180);
	ctx.fillText("ɤ", 568, 180);
	ctx.fillText("o", 620, 180);
	ctx.fillText("e̞", 140, 260);
	ctx.fillText("ø̞", 190, 260);
	ctx.fillText("ə", 390, 260);
	ctx.fillText("ɤ̞", 568, 260);
	ctx.fillText("o̞", 620, 260);
	ctx.fillText("ɛ", 185, 340);
	ctx.fillText("œ", 230, 340);
	ctx.fillText("ɜ", 380, 340);
	ctx.fillText("ɞ", 430, 340);
	ctx.fillText("ʌ", 570, 340);
	ctx.fillText("ɔ", 620, 340);
	ctx.fillText("æ", 220, 420);
	ctx.fillText("ɐ", 405, 420);
	ctx.fillText("a", 265, 500);
	ctx.fillText("ɶ", 317, 500);
	ctx.fillText("ä", 425, 500);
	ctx.fillText("ɑ", 568, 500);
	ctx.fillText("ɒ", 620, 500);
}