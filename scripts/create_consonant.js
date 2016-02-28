var d = document,
head = document.head,
b = d.body,
style = $$('style'),
container = $$('div'),
mainbg = $$('div'),
div1 = $$('div'),
main = $$('main'),
h2 = $$('h2'),
a1_1 = $$('a'),
a1_2 = $$('a'),
a1_3 = $$('a'),
a1_4 = $$('a'),
a1_5 = $$('a'),
a2_1 = $$('a'),
a2_2 = $$('a'),
a2_3 = $$('a'),
a2_4 = $$('a'),
a2_5 = $$('a'),
a2_6 = $$('a'),
a2_7 = $$('a'),
a2_8 = $$('a'),
a2_9 = $$('a'),
a2_10 = $$('a'),
a2_11 = $$('a'),
a2_12 = $$('a'),
a3 = $$('a'),
a4 = $$('a'),
a5 = $$('a'),
a6 = $$('a'),
a7 = $$('a'),
a8 = $$('a'),
a9 = $$('a'),
a10 = $$('a'),
a11 = $$('a'),
a12 = $$('a'),
a13 = $$('a');

head.append(style);
style.rel = 'stylesheet';
style.innerHTML = '*{padding: 0; outline: none; margin: 0; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}' +
	'html{min-width: 1250px;}' +
	'@font-face {font-family: kulminoituva; src: url(content/fonts/kulminoituva.ttf); font-weight: normal; font-style: normal;}' +
	'body{ zoom: 75%; background: url(content/imgs/planet.jpg); background-attachment: fixed; background-size: cover;}' +
	'canvas { width: 30px; position: absolute; cursor:url(../content/imgs/soli.png) 1 1, auto; }' +
	'canvas.first { height: 467px; right: 182px; top: 158px; }' +
	'canvas.second { height: 481px; right: 176px; top: 144px; }' +
	'canvas.third { height: 498px; right: 168px; top: 128px;}' +
	'canvas.fourth { height: 523px; right: 161px; top: 103px; }' +
	'ul li{position: fixed; list-style: none; margin: 20px;}' +
	'ul li a{height: 60px; width: 60px; background-color: rgba(255, 255, 255, .8); border-radius: 30px;}' +
	'.guitar { height: 700px; width: 300px; position: absolute; top: 50px; right: 50px; }' +
	'.home_button { height: 60px; width: 60px; left: 0; cursor: url(../content/imgs/i_letter.png) 1 1, auto; }' +
	'.home_button:hover { transform: scale(1.1); }' +
	'h2{color: #575f3f; text-align: center; padding: 10px 0;}' +
	'img{ width: 35px; position: absolute;}' +
	'a{ height: 16px; width: 80px; position: absolute; color: #888640; cursor: url(../content/imgs/wiki.png) 1 1, auto; font-family: monospace; font-size: 15px; text-align: center; text-decoration: none; overflow: hidden; white-space: nowrap; margin-top: 3px;}' +
	'a:hover{ text-decoration: underline;}'+
	'#img1:hover, #img2:hover, #img3:hover, #img4:hover, #img5:hover, #img6:hover, #img7:hover, #img8:hover, #img9:hover, #img10:hover, #img11:hover, #img12:hover, #img13:hover, #img14:hover, #img15:hover, #img16:hover, #img17:hover, #img18:hover, #img19:hover, #img20:hover, #img21:hover, #img22:hover, #img23:hover, #img24:hover, #img25:hover, #img26:hover, #img27:hover, #img28:hover, #img29:hover, #img30:hover, #img31:hover, #img32:hover, #img33:hover, #img34:hover, #img35:hover, #img36:hover, #img37:hover, #img38:hover, #img39:hover, #img40:hover, #img41:hover, #img42:hover, #img43:hover, #img44:hover, #img45:hover, #img46:hover, #img47:hover, #img48:hover, #img49:hover, #img50:hover, #img51:hover, #img52:hover, #img53:hover, #img54:hover, #img55:hover, #img56:hover, #img57:hover, #img58:hover, #img59:hover, #img60:hover, #img61:hover, #img62:hover, #img63:hover, #img64:hover, #img65:hover, #img66:hover, #img67:hover, #img68:hover { transform: scale(1.15); }';
a1_1.innerHTML = 'Place &#8594;';
a1_1.attr('href', 'https://en.wikipedia.org/wiki/Place_of_articulation');
a1_1.style.top = '1px';
a1_1.style.left = '2px';
a1_2.innerText = 'Labial';
a1_2.attr('href', 'https://en.wikipedia.org/wiki/Labial_consonant');
a1_2.style.top = '1px';
a1_2.style.left = '92px';
a1_3.innerText = 'Coronal';
a1_3.attr('href', 'https://en.wikipedia.org/wiki/Coronal_consonant');
a1_3.style.top = '1px';
a1_3.style.left = '272px';
a1_4.innerText = 'Dorsal';
a1_4.attr('href', 'https://en.wikipedia.org/wiki/Dorsal_consonant');
a1_4.style.top = '1px';
a1_4.style.left = '632px';
a1_5.innerText = 'Laryngeal';
a1_5.attr('href', 'https://en.wikipedia.org/wiki/Laryngeal_consonant');
a1_5.style.top = '1px';
a1_5.style.left = '902px';
a2_1.innerHTML = '&#8595; Manner';
a2_1.attr('href', 'https://en.wikipedia.org/wiki/Manner_of_articulation');
a2_1.style.top = '21px';
a2_1.style.left = '2px';
a2_2.innerText = 'Bila­bial';
a2_2.attr('href', 'https://en.wikipedia.org/wiki/Bilabial_consonant');
a2_2.style.top = '21px';
a2_2.style.left = '92px';
a2_3.innerText = 'Labio­dental';
a2_3.attr('href', 'https://en.wikipedia.org/wiki/Labiodental_consonant');
a2_3.style.top = '21px';
a2_3.style.left = '182px';
a2_4.innerText = 'Den­tal';
a2_4.attr('href', 'https://en.wikipedia.org/wiki/Dental_consonant');
a2_4.style.top = '21px';
a2_4.style.left = '272px';
a2_5.innerText = 'Alve­olar';
a2_5.attr('href', 'https://en.wikipedia.org/wiki/Alveolar_consonant');
a2_5.style.top = '21px';
a2_5.style.left = '362px';
a2_6.innerText = 'Palato-alve­olar';
a2_6.attr('href', 'https://en.wikipedia.org/wiki/Palato-alveolar_consonant');
a2_6.style.height = '32px';
a2_6.style.top = '21px';
a2_6.style.left = '452px';
a2_7.innerText = 'Retro­flex';
a2_7.attr('href', 'https://en.wikipedia.org/wiki/Retroflex_consonant');
a2_7.style.top = '21px';
a2_7.style.left = '542px';
a2_8.innerText = 'Pal­a­tal';
a2_8.attr('href', 'https://en.wikipedia.org/wiki/Palatal_consonant');
a2_8.style.top = '21px';
a2_8.style.left = '632px';
a2_9.innerText = 'Ve­lar';
a2_9.attr('href', 'https://en.wikipedia.org/wiki/Velar_consonant');
a2_9.style.top = '21px';
a2_9.style.left = '722px';
a2_10.innerText = 'Uvu­lar';
a2_10.attr('href', 'https://en.wikipedia.org/wiki/Uvular_consonant');
a2_10.style.top = '21px';
a2_10.style.left = '812px';
a2_11.innerText = 'Pha­ryn­geal';
a2_11.attr('href', 'https://en.wikipedia.org/wiki/Pharyngeal_consonant');
a2_11.style.top = '21px';
a2_11.style.left = '902px';
a2_12.innerText = 'Glot­tal';
a2_12.attr('href', 'https://en.wikipedia.org/wiki/Glottal_consonant');
a2_12.style.top = '21px';
a2_12.style.left = '992px';
a3.innerText = 'Nasal';
a3.attr('href', 'https://en.wikipedia.org/wiki/Nasal_stop');
a3.style.top = '80px';
a3.style.left = '2px';
a4.innerText = 'Plosive';
a4.attr('href', 'https://en.wikipedia.org/wiki/Plosive_consonant');
a4.style.top = '140px';
a4.style.left = '2px';
a5.innerText = 'Fricative';
a5.attr('href', 'https://en.wikipedia.org/wiki/Fricative_consonant');
a5.style.top = '200px';
a5.style.left = '2px';
a6.innerText = 'Approximant';
a6.attr('href', 'https://en.wikipedia.org/wiki/Approximant_consonant');
a6.style.top = '260px';
a6.style.left = '2px';
a7.innerText = 'Trill';
a7.attr('href', 'https://en.wikipedia.org/wiki/Trill_consonant');
a7.style.top = '320px';
a7.style.left = '2px';
a8.innerText = 'Flap or tap';
a8.attr('href', 'https://en.wikipedia.org/wiki/Flap_consonant');
a8.style.top = '380px';
a8.style.left = '2px';
a9.innerText = 'Lateral';
a9.attr('href', 'https://en.wikipedia.org/wiki/Lateral_consonant');
a9.style.top = '430px';
a9.style.left = '2px';
a10.innerText = 'fricative';
a10.attr('href', 'https://en.wikipedia.org/wiki/Fricative_consonant');
a10.style.top = '450px';
a10.style.left = '2px';
a11.innerText = 'Lateral';
a11.attr('href', 'https://en.wikipedia.org/wiki/Lateral_consonant');
a11.style.top = '490px';
a11.style.left = '2px';
a12.innerText = 'approximant';
a12.attr('href', 'https://en.wikipedia.org/wiki/Approximant_consonant');
a12.style.top = '510px';
a12.style.left = '2px';
a13.innerText = 'Lateral flap';
a13.attr('href', 'https://en.wikipedia.org/wiki/Lateral_flap');
a13.style.top = '560px';
a13.style.left = '2px';
h2.innerHTML = '<abbr title="International Phonetic Alphabet">IPA</abbr> chart pulmonic consonants with audio';
create_svg();
div1.append(main).append(a1_1).append(a1_2).append(a1_3).append(a1_4).append(a1_5).append(a2_1).append(a2_2).append(a2_3).append(a2_4).append(a2_5).append(a2_6).append(a2_7).append(a2_8).append(a2_9).append(a2_10).append(a2_11).append(a2_12).append(a3).append(a4).append(a5).append(a6).append(a7).append(a8).append(a9).append(a10).append(a11).append(a12).append(a13);
div1.style.position = 'relative';
div1.style.display = 'table';
mainbg.append(h2).append(div1);
mainbg.style.display = 'table';
mainbg.style.padding = '10px';
mainbg.style.borderRadius = '10px';
mainbg.style.boxShadow = '0 0 80px 4px #000';
mainbg.style.background = 'rgba(255, 255, 255, .9)';
mainbg.style.margin = 'auto';
container.append(mainbg);
container.style.display = 'table';
container.style.padding = '50px';
container.style.margin = 'auto';
b.append(container);
consonant_audios();