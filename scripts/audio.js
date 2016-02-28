var x, ref, add1 = 'content/audios/vowel', add2 = 'content/audios/';
function createAudio(params) {
	var audio = $$('audio'), img = $$('img');
	audio.id = params.id1;
	audio.src = params.src;
	audio.on('play', function () {
		$('#' + params.id2).attr('src', 'content/imgs/sharp.png');
	});
	audio.on('pause', function () {
		$('#' + params.id2).attr('src', 'content/imgs/play_black.png');
	});
	img.id = params.id2;
	img.style.top = params.top;
	img.style.left = params.left;
	img.attr('src', 'content/imgs/play_black.png');
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
function setAudios_vowel() {
	var params = [{id1: 'aud1', id2: 'img1', src: add1+'01.ogg', top: '25px', left: '0' },
	{id1: 'aud2', id2: 'img2', src: add1+'02.ogg', top: '25px', left: '50px'},
	{id1: 'aud3', id2: 'img3', src: add1+'03.ogg', top: '25px', left: '282px'},
	{id1: 'aud4', id2: 'img4', src: add1+'04.ogg', top: '25px', left: '331px'},
	{id1: 'aud5', id2: 'img5', src: add1+'05.ogg', top: '25px', left: '551px'},
	{id1: 'aud6', id2: 'img6', src: add1+'06.ogg', top: '25px', left: '600px'},
	{id1: 'aud7', id2: 'img7', src: add1+'07.ogg', top: '95px', left: '160px'},
	{id1: 'aud8', id2: 'img8', src: add1+'08.ogg', top: '95px', left: '210px'},
	{id1: 'aud9', id2: 'img9', src: add1+'09.ogg', top: '95px', left: '301px'},
	{id1: 'aud10', id2: 'img10', src: add1+'10.ogg', top: '95px', left: '450px'},
	{id1: 'aud11', id2: 'img11', src: add1+'11.ogg', top: '185px', left: '80px'},
	{id1: 'aud12', id2: 'img12', src: add1+'12.ogg', top: '185px', left: '131px'},
	{id1: 'aud13', id2: 'img13', src: add1+'13.ogg', top: '185px', left: '320px'},
	{id1: 'aud14', id2: 'img14', src: add1+'14.ogg', top: '185px', left: '370px'},
	{id1: 'aud15', id2: 'img15', src: add1+'15.ogg', top: '185px', left: '550px'},
	{id1: 'aud16', id2: 'img16', src: add1+'16.ogg', top: '185px', left: '600px'},
	{id1: 'aud17', id2: 'img17', src: add1+'17.ogg', top: '265px', left: '120px'},
	{id1: 'aud18', id2: 'img18', src: add1+'18.ogg', top: '265px', left: '600px'},
	{id1: 'aud19', id2: 'img19', src: add1+'19.ogg', top: '345px', left: '164px'},
	{id1: 'aud20', id2: 'img20', src: add1+'20.ogg', top: '345px', left: '214px'},
	{id1: 'aud21', id2: 'img21', src: add1+'21.ogg', top: '345px', left: '360px'},
	{id1: 'aud22', id2: 'img22', src: add1+'22.ogg', top: '345px', left: '410px'},
	{id1: 'aud23', id2: 'img23', src: add1+'23.ogg', top: '345px', left: '550px'},
	{id1: 'aud24', id2: 'img24', src: add1+'24.ogg', top: '345px', left: '600px'},
	{id1: 'aud25', id2: 'img25', src: add1+'25.ogg', top: '425px', left: '205px'},
	{id1: 'aud26', id2: 'img26', src: add1+'26.ogg', top: '425px', left: '385px'},
	{id1: 'aud27', id2: 'img27', src: add1+'27.ogg', top: '505px', left: '245px'},
	{id1: 'aud28', id2: 'img28', src: add1+'28.ogg', top: '505px', left: '300px'},
	{id1: 'aud29', id2: 'img29', src: add1+'29.ogg', top: '505px', left: '405px'},
	{id1: 'aud30', id2: 'img30', src: add1+'30.ogg', top: '505px', left: '550px'},
	{id1: 'aud31', id2: 'img31', src: add1+'31.ogg', top: '505px', left: '600px'}];

	for (var i = 0; i < params.length; ++i) {
		createAudio(params[i]);
	}
}
function consonant_audios() {
	var params = [{ id1: 'aud1', id2: 'img1', src: add2 + '1_1.ogg', left: '140px', top: '77px' },
	{ id1: 'aud2', id2: 'img2', src: add2 + '1_2.ogg', left: '230px', top: '77px' },
	{ id1: 'aud3', id2: 'img3', src: add2 + '1_3.ogg', left: '410px', top: '77px' },
	{ id1: 'aud4', id2: 'img4', src: add2 + '1_4.ogg', left: '590px', top: '77px' },
	{ id1: 'aud5', id2: 'img5', src: add2 + '1_5.ogg', left: '680px', top: '77px' },
	{ id1: 'aud6', id2: 'img6', src: add2 + '1_6.ogg', left: '770px', top: '77px' },
	{ id1: 'aud7', id2: 'img7', src: add2 + '1_7.ogg', left: '860px', top: '77px' },
	{ id1: 'aud8', id2: 'img8', src: add2 + '2_1.ogg', left: '94px', top: '137px' },
	{ id1: 'aud9', id2: 'img9', src: add2 + '2_2.ogg', left: '140px', top: '137px' },
	{ id1: 'aud10', id2: 'img10', src: add2 + '2_3.ogg', left: '274px', top: '137px' },
	{ id1: 'aud11', id2: 'img11', src: add2 + '2_4.ogg', left: '320px', top: '137px' },
	{ id1: 'aud12', id2: 'img12', src: add2 + '2_5.ogg', left: '364px', top: '137px' },
	{ id1: 'aud13', id2: 'img13', src: add2 + '2_6.ogg', left: '410px', top: '137px' },
	{ id1: 'aud14', id2: 'img14', src: add2 + '2_7.oga', left: '544px', top: '137px' },
	{ id1: 'aud15', id2: 'img15', src: add2 + '2_8.oga', left: '590px', top: '137px' },
	{ id1: 'aud16', id2: 'img16', src: add2 + '2_9.ogg', left: '634px', top: '137px' },
	{ id1: 'aud17', id2: 'img17', src: add2 + '2_10.ogg', left: '680px', top: '137px' },
	{ id1: 'aud18', id2: 'img18', src: add2 + '2_11.ogg', left: '724px', top: '137px' },
	{ id1: 'aud19', id2: 'img19', src: add2 + '2_12.ogg', left: '770px', top: '137px' },
	{ id1: 'aud20', id2: 'img20', src: add2 + '2_13.ogg', left: '814px', top: '137px' },
	{ id1: 'aud21', id2: 'img21', src: add2 + '2_14.oga', left: '860px', top: '137px' },
	{ id1: 'aud22', id2: 'img22', src: add2 + '2_15.ogg', left: '927px', top: '137px' },
	{ id1: 'aud23', id2: 'img23', src: add2 + '2_16.ogg', left: '994px', top: '137px' },
	{ id1: 'aud24', id2: 'img24', src: add2 + '3_1.ogg', left: '94px', top: '197px' },
	{ id1: 'aud25', id2: 'img25', src: add2 + '3_2.ogg', left: '140px', top: '197px' },
	{ id1: 'aud26', id2: 'img26', src: add2 + '3_3.ogg', left: '184px', top: '197px' },
	{ id1: 'aud27', id2: 'img27', src: add2 + '3_4.ogg', left: '230px', top: '197px' },
	{ id1: 'aud28', id2: 'img28', src: add2 + '3_5.ogg', left: '274px', top: '197px' },
	{ id1: 'aud29', id2: 'img29', src: add2 + '3_6.ogg', left: '320px', top: '197px' },
	{ id1: 'aud30', id2: 'img30', src: add2 + '3_7.ogg', left: '364px', top: '197px' },
	{ id1: 'aud31', id2: 'img31', src: add2 + '3_8.ogg', left: '410px', top: '197px' },
	{ id1: 'aud32', id2: 'img32', src: add2 + '3_9.ogg', left: '454px', top: '197px' },
	{ id1: 'aud33', id2: 'img33', src: add2 + '3_10.ogg', left: '500px', top: '197px' },
	{ id1: 'aud34', id2: 'img34', src: add2 + '3_11.ogg', left: '544px', top: '197px' },
	{ id1: 'aud35', id2: 'img35', src: add2 + '3_12.ogg', left: '590px', top: '197px' },
	{ id1: 'aud36', id2: 'img36', src: add2 + '3_13.ogg', left: '634px', top: '197px' },
	{ id1: 'aud37', id2: 'img37', src: add2 + '3_14.ogg', left: '680px', top: '197px' },
	{ id1: 'aud38', id2: 'img38', src: add2 + '3_15.ogg', left: '724px', top: '197px' },
	{ id1: 'aud39', id2: 'img39', src: add2 + '3_16.ogg', left: '770px', top: '197px' },
	{ id1: 'aud40', id2: 'img40', src: add2 + '3_17.ogg', left: '814px', top: '197px' },
	{ id1: 'aud41', id2: 'img41', src: add2 + '3_18.ogg', left: '860px', top: '227px' },
	{ id1: 'aud42', id2: 'img42', src: add2 + '3_19.ogg', left: '904px', top: '197px' },
	{ id1: 'aud43', id2: 'img43', src: add2 + '3_20.ogg', left: '950px', top: '227px' },
	{ id1: 'aud44', id2: 'img44', src: add2 + '3_21.ogg', left: '994px', top: '197px' },
	{ id1: 'aud45', id2: 'img45', src: add2 + '3_22.ogg', left: '1040px', top: '227px' },
	{ id1: 'aud46', id2: 'img46', src: add2 + '4_1.ogg', left: '230px', top: '257px' },
	{ id1: 'aud47', id2: 'img47', src: add2 + '4_2.ogg', left: '500px', top: '257px' },
	{ id1: 'aud48', id2: 'img48', src: add2 + '4_3.ogg', left: '590px', top: '257px' },
	{ id1: 'aud49', id2: 'img49', src: add2 + '4_4.ogg', left: '680px', top: '257px' },
	{ id1: 'aud50', id2: 'img50', src: add2 + '4_5.ogg', left: '770px', top: '257px' },
	{ id1: 'aud51', id2: 'img51', src: add2 + '5_1.ogg', left: '140px', top: '317px' },
	{ id1: 'aud52', id2: 'img52', src: add2 + '5_2.ogg', left: '410px', top: '317px' },
	{ id1: 'aud53', id2: 'img53', src: add2 + '5_3.ogg', left: '860px', top: '317px' },
	{ id1: 'aud54', id2: 'img54', src: add2 + '5_4.ogg', left: '904px', top: '317px' },
	{ id1: 'aud55', id2: 'img55', src: add2 + '5_5.ogg', left: '950px', top: '317px' },
	{ id1: 'aud56', id2: 'img56', src: add2 + '6_1.ogg', left: '230px', top: '377px' },
	{ id1: 'aud57', id2: 'img57', src: add2 + '6_2.ogg', left: '410px', top: '377px' },
	{ id1: 'aud58', id2: 'img58', src: add2 + '6_3.ogg', left: '590px', top: '377px' },
	{ id1: 'aud59', id2: 'img59', src: add2 + '7_1.ogg', left: '364px', top: '437px' },
	{ id1: 'aud60', id2: 'img60', src: add2 + '7_2.ogg', left: '410px', top: '437px' },
	{ id1: 'aud61', id2: 'img61', src: add2 + '7_3.ogg', left: '544px', top: '437px' },
	{ id1: 'aud62', id2: 'img62', src: add2 + '7_4.ogg', left: '634px', top: '437px' },
	{ id1: 'aud63', id2: 'img63', src: add2 + '7_5.ogg', left: '724px', top: '437px' },
	{ id1: 'aud64', id2: 'img64', src: add2 + '8_1.ogg', left: '410px', top: '497px' },
	{ id1: 'aud65', id2: 'img65', src: add2 + '8_2.ogg', left: '590px', top: '497px' },
	{ id1: 'aud66', id2: 'img66', src: add2 + '8_3.ogg', left: '680px', top: '497px' },
	{ id1: 'aud67', id2: 'img67', src: add2 + '8_4.ogg', left: '770px', top: '497px' },
	{ id1: 'aud68', id2: 'img68', src: add2 + '9_1.ogg', left: '410px', top: '557px' }]

	for (var i = 0; i < params.length; ++i) {
		createAudio(params[i]);
	}
}