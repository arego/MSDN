var d = document,
head = document.head,
b = d.body,
style = $$('style'),
main = $$('main'),
h2 = $$('h2'),
canvas = $$('canvas'),
table = $$('table'),
thead = table.createTHead(),
tbody = table.createTBody(),
tr1 = thead.insertRow(),
tr2 = tbody.insertRow(),
tr3 = tbody.insertRow(),
tr4 = tbody.insertRow(),
tr5 = tbody.insertRow(),
tr6 = tbody.insertRow(),
tr7 = tbody.insertRow(),
tr8 = tbody.insertRow(),
td1_1 = tr1.insertCell(),
td1_2 = tr1.insertCell(),
td1_3 = tr1.insertCell(),
td1_4 = tr1.insertCell(),
td1_5 = tr1.insertCell(),
td1_6 = tr1.insertCell(),
td2_1 = tr2.insertCell(),
td2_2 = tr2.insertCell(),
td3 = tr3.insertCell(),
td4 = tr4.insertCell(),
td5 = tr5.insertCell(),
td6 = tr6.insertCell(),
td7 = tr7.insertCell(),
td8 = tr8.insertCell(),
a_h2_1 = $$('a'),
a_h2_2 = $$('a'),
a1_2 = $$('a'),
a1_3 = $$('a'),
a1_4 = $$('a'),
a1_5 = $$('a'),
a1_6 = $$('a'),
a2 = $$('a'),
a3 = $$('a'),
a4 = $$('a'),
a5 = $$('a'),
a6 = $$('a'),
a7 = $$('a'),
a8 = $$('a'),
div1 = $$('div'),
div2 = $$('div');

head.append(style);
style.rel = 'stylesheet';
style.innerHTML = '* {padding: 0; outline: none; margin: 0; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}' +
	'html {min-width: 1200px;}'+
	'body {zoom: 75%; background-image: url(content/imgs/guitar.jpg); background-attachment: fixed; background-repeat: no-repeat; background-size: cover;}' +
	'main {display: table; padding: 20px 50px; background-color: rgba(255, 255, 255, .8); border-radius: 20px; margin: auto;}' +
	'table {white-space: nowrap;}' +
	'@font-face {font-family: kulminoituva; src: url(content/fonts/kulminoituva.ttf); font-weight: normal; font-style: normal;}'+
	'a {color: #688491; font-family: sans-serif; font-weight: bold; text-decoration: none;     cursor: url(../content/imgs/w_letter.png) 1 1, auto; }' +
	'a:hover{text-decoration: underline;}' +
	'img {width: 40px; position: absolute;}' +
	'img:hover {transform: scale(1.1);}' +
	'ul li {position: fixed; list-style: none; margin: 20px;}' +
	'ul li a { height: 60px; width: 60px; background-color: rgba(255, 255, 255, .8); border-radius: 5px;}' +
	'.home_button { height: 60px; width: 60px; left: 0; cursor: url(../content/imgs/i_letter.png) 1 1, auto; border-style: outset; border-radius: 35px; }' +
	'h2 {text-align: center; padding-bottom: 30px;}';
canvas.attr('id', 'draw').attr('width', '700').attr('height', '570');
create_canvas();
setAudios();

a_h2_1.innerText = 'IPA';
a_h2_1.attr('title', 'International Phonetic Alphabet');
a_h2_1.attr('href', 'https://en.wikipedia.org/wiki/International_Phonetic_Alphabet');
a_h2_2.innerText = 'vowel chart';
a_h2_2.attr('href', 'https://en.wikipedia.org/wiki/Vowel_chart');
a1_2.innerText = 'Front';
a1_2.attr('href', 'https://en.wikipedia.org/wiki/Front_vowel');
a1_3.innerText = 'Near-front';
a1_3.attr('href', 'https://en.wikipedia.org/wiki/Near-front_vowel');
a1_4.innerText = 'Central';
a1_4.attr('href', 'https://en.wikipedia.org/wiki/Central_vowel');
a1_5.innerText = 'Near-back';
a1_5.attr('href', 'https://en.wikipedia.org/wiki/Near-back_vowel');
a1_6.innerText = 'Back';
a1_6.attr('href', 'https://en.wikipedia.org/wiki/Back_vowel');
a2.innerText = 'Close';
a2.attr('href', 'https://en.wikipedia.org/wiki/Close_vowel');
a3.innerText = 'Near-close';
a3.attr('href', 'https://en.wikipedia.org/wiki/Near-close_vowel');
a4.innerText = 'Close-mid';
a4.attr('href', 'https://en.wikipedia.org/wiki/Close-mid_vowel');
a5.innerText = 'Mid';
a5.attr('href', 'https://en.wikipedia.org/wiki/Mid_vowel');
a6.innerText = 'Open-mid';
a6.attr('href', 'https://en.wikipedia.org/wiki/Open-mid_vowel');
a7.innerText = 'Near-open';
a7.attr('href', 'https://en.wikipedia.org/wiki/Near-open_vowel');
a8.innerText = 'Open';
a8.attr('href', 'https://en.wikipedia.org/wiki/Open_vowel');

div1.append(canvas);
h2.append(a_h2_1);
h2.innerHTML += ' ';
h2.append(a_h2_2);
h2.innerHTML += ' with audio';
td1_2.append(a1_2);
td1_3.append(a1_3);
td1_4.append(a1_4);
td1_5.append(a1_5);
td1_6.append(a1_6);
td2_1.append(a2);
td2_2.attr('colspan', '5');
td2_2.attr('rowspan', '7');
td2_2.style.position = 'relative';
td2_2.append(div1);
td3.append(a3);
td4.append(a4);
td5.append(a5);
td6.append(a6);
td7.append(a7);
td8.append(a8);
main.append(h2);
main.append(table);
div2.append(main);
div2.style.display = 'table';
div2.style.padding = '50px 20px 50px 180px';
div2.style.margin = 'auto';
b.append(div2);