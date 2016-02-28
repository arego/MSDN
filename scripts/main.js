(function () {
	"use strict";

	var canvas1 = document.getElementById("line_first"),
		canvas2 = document.getElementById("line_second"),
		canvas3 = document.getElementById("line_third"),
		canvas4 = document.getElementById("line_fourth"),
		ctx1 = canvas1.getContext('2d'),
		ctx2 = canvas2.getContext('2d'),
		ctx3 = canvas3.getContext('2d'),
		ctx4 = canvas4.getContext('2d'),
		width = canvas1.width,
		height = canvas1.height,
		size = 2048,
		xCenter = width / 2,
		maxHeight = width / 2 - 2,
		processed = false,
		step = height / size,
		audioEls = document.querySelectorAll("audio"),
		context = new AudioContext(),
		processor = null,
		loaded = 0,
		audios = [],
		sources = [],
		buffer1 = new Float32Array(size),
		buffer2 = new Float32Array(size),
		buffer3 = new Float32Array(size),
		buffer4 = new Float32Array(size);

	window.p = 0;
	window.d = 0;

	audios = [].map.call(audioEls, function (item) { item.onloadeddata = onLoad; return item; })

	processor = context.createScriptProcessor(size, 2, 2);
	processor.onaudioprocess = onAudioProcess;
	processor.connect(context.destination);

	function startProcessing() {
		audios.forEach(function (audio) {
			sources.push(context.createMediaElementSource(audio));
			sources.last.connect(processor);
		});
	}

	function onLoad() {
		++loaded;

		console.log("Loaded " + Math.floor(loaded / audios.length * 100) + "%");

		loaded === audios.length && startProcessing();
	}

	function onAudioProcess(e) {
		var i = null,
			inp = e.inputBuffer.getChannelData(0),
			out = e.outputBuffer.getChannelData(0);

		for (i in inp) {
			out[i] = buffer1[i] = inp[i];
		}

			inp = e.inputBuffer.getChannelData(1),
			out = e.outputBuffer.getChannelData(1);

		for (i in inp) {
			out[i] = buffer2[i] = inp[i];
		}

		for (i in inp) {
			out[i] = buffer3[i] = inp[i];
		}

		for (i in inp) {
			out[i] = buffer4[i] = inp[i];
		}

		processed = true;
	}

	ctx1.strokeStyle = ctx2.strokeStyle = ctx3.strokeStyle = ctx4.strokeStyle = "#695d5b";
	ctx1.lineWidth = ctx2.lineWidth = ctx3.lineWidth = ctx4.lineWidth = 2;
	ctx1.shadowBlur = ctx2.shadowBlur = ctx3.shadowBlur = ctx4.shadowBlur = 10;
	ctx1.shadowColor = ctx2.shadowColor = ctx3.shadowColor = ctx4.shadowColor = "#fff";

	(function draw() {
		var i = 0;

		if (processed) {
			processed = false;

			ctx1.clearRect(0, 0, width, height);
			ctx1.beginPath();
			ctx1.moveTo(xCenter, 0);

			for (; i < size; ++i) {
				ctx1.lineTo(xCenter + buffer1[i] * maxHeight, i * step)
			}

			ctx1.stroke();

			ctx2.clearRect(0, 0, width, height);
			ctx2.beginPath();
			ctx2.moveTo(xCenter, 0);

			for (i = 0; i < size; ++i) {
				ctx2.lineTo(xCenter - buffer2[i] * maxHeight, i * step)
			}

			ctx2.stroke();

			ctx3.clearRect(0, 0, width, height);
			ctx3.beginPath();
			ctx3.moveTo(xCenter, 0);

			for (i = 0; i < size; ++i) {
				ctx3.lineTo(xCenter - buffer3[i] * maxHeight, i * step)
			}

			ctx3.stroke();

			ctx4.clearRect(0, 0, width, height);
			ctx4.beginPath();
			ctx4.moveTo(xCenter, 0);

			for (i = 0; i < size; ++i) {
				ctx4.lineTo(xCenter - buffer4[i] * maxHeight, i * step)
			}

			ctx4.stroke();
		}

		requestAnimationFrame(draw);
	}());
}());