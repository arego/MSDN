var x, ref, add = 'content/audios/vowel';
function createAudio(params) {
	var audio = $$('audio'), img = $$('img');
	audio.id = params.id1;
	audio.src = params.src;
	audio.on('play', function () {
		$('#' + params.id2).attr('src', 'content/imgs/pause.png');
	});
	audio.on('pause', function () {
		$('#' + params.id2).attr('src', 'content/imgs/play.png');
	});
	img.id = params.id2;
	img.style.top = params.top;
	img.style.left = params.left;
	img.attr('src', 'content/imgs/play.png');
	img.on('click', function () {
		ref = $('#' + params.id1);
		if (x == null)
			x = $('#' + params.id1);
		if (x == ref) {
			if (x.paused) {
				x.currentTime = 0;
				x.play();
			} else
				x.pause();
		} else {
			x.pause();
			x.currentTime = 0;
			ref.currentTime = 0;
			ref.play();
			x = ref;
		}
	});
	div1.appendChild(audio);
	div1.appendChild(img);
}
function setAudios() {
	var params = [{ id1: 'aud1', id2: 'img1', src: add+'01.ogg', top: '25px', left: '5px' },
	{ id1: 'aud2', id2: 'img2', src: add+'02.ogg', top: '25px', left: '55px' },
	{ id1: 'aud3', id2: 'img3', src: add+'03.ogg', top: '25px', left: '287px' },
	{ id1: 'aud4', id2: 'img4', src: add+'04.ogg', top: '25px', left: '336px' },
	{ id1: 'aud5', id2: 'img5', src: add+'05.ogg', top: '25px', left: '556px' },
	{ id1: 'aud6', id2: 'img6', src: add+'06.ogg', top: '25px', left: '605px' },
	{ id1: 'aud7', id2: 'img7', src: add+'07.ogg', top: '95px', left: '165px' },
	{ id1: 'aud8', id2: 'img8', src: add+'08.ogg', top: '95px', left: '215px' },
	{ id1: 'aud9', id2: 'img9', src: add+'09.ogg', top: '95px', left: '306px' },
	{ id1: 'aud10', id2: 'img10', src: add+'10.ogg', top: '95px', left: '455px' },
	{ id1: 'aud11', id2: 'img11', src: add+'11.ogg', top: '185px', left: '85px' },
	{ id1: 'aud12', id2: 'img12', src: add+'12.ogg', top: '185px', left: '136px' },
	{ id1: 'aud13', id2: 'img13', src: add+'13.ogg', top: '185px', left: '325px' },
	{ id1: 'aud14', id2: 'img14', src: add+'14.ogg', top: '185px', left: '375px' },
	{ id1: 'aud15', id2: 'img15', src: add+'15.ogg', top: '185px', left: '555px' },
	{ id1: 'aud16', id2: 'img16', src: add+'16.ogg', top: '185px', left: '605px' },
	{ id1: 'aud17', id2: 'img17', src: add+'17.ogg', top: '265px', left: '125px' },
	{ id1: 'aud18', id2: 'img18', src: add+'18.ogg', top: '265px', left: '605px' },
	{ id1: 'aud19', id2: 'img19', src: add+'19.ogg', top: '345px', left: '169px' },
	{ id1: 'aud20', id2: 'img20', src: add+'20.ogg', top: '345px', left: '219px' },
	{ id1: 'aud21', id2: 'img21', src: add+'21.ogg', top: '345px', left: '365px' },
	{ id1: 'aud22', id2: 'img22', src: add+'22.ogg', top: '345px', left: '415px' },
	{ id1: 'aud23', id2: 'img23', src: add+'23.ogg', top: '345px', left: '555px' },
	{ id1: 'aud24', id2: 'img24', src: add+'24.ogg', top: '345px', left: '605px' },
	{ id1: 'aud25', id2: 'img25', src: add+'25.ogg', top: '425px', left: '210px' },
	{ id1: 'aud26', id2: 'img26', src: add+'26.ogg', top: '425px', left: '390px' },
	{ id1: 'aud27', id2: 'img27', src: add+'27.ogg', top: '505px', left: '250px' },
	{ id1: 'aud28', id2: 'img28', src: add+'28.ogg', top: '505px', left: '305px' },
	{ id1: 'aud29', id2: 'img29', src: add+'29.ogg', top: '505px', left: '410px' },
	{ id1: 'aud30', id2: 'img30', src: add+'30.ogg', top: '505px', left: '555px' },
	{ id1: 'aud31', id2: 'img31', src: add+'31.ogg', top: '505px', left: '605px' }];

	for (var i = 0; i < params.length; ++i) {
		createAudio(params[i]);
	}
}