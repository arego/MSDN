function create_svg() {
	main.innerHTML = '<svg width="1100" height="600" xmlns="http://www.w3.org/2000/svg">' +
	'<rect x="900" y="60" width="180" height="60" style="fill:#ccc;" />' +
	'<rect x="1035" y="120" width="45" height="60" style="fill:#ccc;" />' +
	'<rect x="630" y="300" width="180" height="120" style="fill:#ccc;" />' +
	'<rect x="990" y="300" width="90" height="120" style="fill:#ccc;" />' +
	'<rect x="90" y="420" width="180" height="180" style="fill:#ccc;" />' +
	'<rect x="810" y="420" width="270" height="180" style="fill:#ccc;" />' +
	'<rect x="720" y="540" width="90" height="60" style="fill:#ccc;" />' +
	'<line x1="90" y1="0" x2="90" y2="600" stroke-width="2" stroke="#000" fill="none"/>' +
	'<line x1="180" y1="20" x2="180" y2="600" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="270" y1="0" x2="270" y2="600" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="360" y1="20" x2="360" y2="60" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="360" y1="180" x2="360" y2="240" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="450" y1="20" x2="450" y2="60" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="450" y1="180" x2="450" y2="240" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="540" y1="20" x2="540" y2="600" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="630" y1="0" x2="630" y2="600" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="720" y1="20" x2="720" y2="600" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="810" y1="20" x2="810" y2="600" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="900" y1="0" x2="900" y2="600" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="990" y1="20" x2="990" y2="600" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="1080" y1="0" x2="1080" y2="600" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="90" y1="20" x2="1080" y2="20" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="0" y1="60" x2="1080" y2="60" stroke-width="2" stroke="#000" fill="none"/>' +
	'<line x1="0" y1="120" x2="1080" y2="120" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="0" y1="180" x2="1080" y2="180" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="0" y1="240" x2="1080" y2="240" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="0" y1="300" x2="1080" y2="300" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="0" y1="360" x2="1080" y2="360" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="0" y1="420" x2="1080" y2="420" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="0" y1="480" x2="1080" y2="480" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="0" y1="540" x2="1080" y2="540" stroke-width="1" stroke="#000" fill="none"/>' +
	'<line x1="0" y1="600" x2="1080" y2="600" stroke-width="1" stroke="#000" fill="none"/>' +
	'<text x="152" y="73" style="font-family: sans-serif; font-size: 14px;">m</text>' +
	'<text x="242" y="73" style="font-family: sans-serif; font-size: 14px;">ɱ</text>' +
	'<text x="332" y="73" style="font-family: sans-serif; font-size: 14px;">n̪</text>' +
	'<text x="424" y="73" style="font-family: sans-serif; font-size: 14px;">n</text>' +
	'<text x="604" y="73" style="font-family: sans-serif; font-size: 14px;">ɳ</text>' +
	'<text x="694" y="73" style="font-family: sans-serif; font-size: 14px;">ɲ</text>' +
	'<text x="784" y="73" style="font-family: sans-serif; font-size: 14px;">ŋ</text>' +
	'<text x="874" y="73" style="font-family: sans-serif; font-size: 14px;">ɴ</text>' +
	'<text x="110" y="133" style="font-family: sans-serif; font-size: 14px;">p</text>' +
	'<text x="154" y="133" style="font-family: sans-serif; font-size: 14px;">b</text>' +
	'<text x="204" y="133" style="font-family: sans-serif; font-size: 14px;">p̪</text>' +
	'<text x="244" y="133" style="font-family: sans-serif; font-size: 14px;">b̪</text>' +
	'<text x="290" y="133" style="font-family: sans-serif; font-size: 14px;">t̪</text>' +
	'<text x="334" y="133" style="font-family: sans-serif; font-size: 14px;">d̪</text>' +
	'<text x="380" y="133" style="font-family: sans-serif; font-size: 14px;">t</text>' +
	'<text x="424" y="133" style="font-family: sans-serif; font-size: 14px;">d</text>' +
	'<text x="560" y="133" style="font-family: sans-serif; font-size: 14px;">ʈ</text>' +
	'<text x="602" y="133" style="font-family: sans-serif; font-size: 14px;">ɖ</text>' +
	'<text x="648" y="133" style="font-family: sans-serif; font-size: 14px;">c</text>' +
	'<text x="695" y="133" style="font-family: sans-serif; font-size: 14px;">ɟ</text>' +
	'<text x="738" y="133" style="font-family: sans-serif; font-size: 14px;">k</text>' +
	'<text x="784" y="133" style="font-family: sans-serif; font-size: 14px;">ɡ</text>' +
	'<text x="828" y="133" style="font-family: sans-serif; font-size: 14px;">q</text>' +
	'<text x="874" y="133" style="font-family: sans-serif; font-size: 14px;">ɢ</text>' +
	'<text x="942" y="133" style="font-family: sans-serif; font-size: 14px;">ʡ</text>' +
	'<text x="1008" y="133" style="font-family: sans-serif; font-size: 14px;">ʔ</text>' +
	'<text x="108" y="193" style="font-family: sans-serif; font-size: 14px;">ɸ</text>' +
	'<text x="154" y="193" style="font-family: sans-serif; font-size: 14px;">β</text>' +
	'<text x="200" y="193" style="font-family: sans-serif; font-size: 14px;">f</text>' +
	'<text x="244" y="193" style="font-family: sans-serif; font-size: 14px;">v</text>' +
	'<text x="288" y="193" style="font-family: sans-serif; font-size: 14px;">θ</text>' +
	'<text x="334" y="193" style="font-family: sans-serif; font-size: 14px;">ð</text>' +
	'<text x="378" y="193" style="font-family: sans-serif; font-size: 14px;">s</text>' +
	'<text x="424" y="193" style="font-family: sans-serif; font-size: 14px;">z</text>' +
	'<text x="470" y="193" style="font-family: sans-serif; font-size: 14px;">ʃ</text>' +
	'<text x="514" y="193" style="font-family: sans-serif; font-size: 14px;">ʒ</text>' +
	'<text x="558" y="193" style="font-family: sans-serif; font-size: 14px;">ʂ</text>' +
	'<text x="604" y="193" style="font-family: sans-serif; font-size: 14px;">ʐ</text>' +
	'<text x="648" y="193" style="font-family: sans-serif; font-size: 14px;">ç</text>' +
	'<text x="694" y="193" style="font-family: sans-serif; font-size: 14px;">ʝ</text>' +
	'<text x="738" y="193" style="font-family: sans-serif; font-size: 14px;">x</text>' +
	'<text x="784" y="193" style="font-family: sans-serif; font-size: 14px;">ɣ</text>' +
	'<text x="828" y="193" style="font-family: sans-serif; font-size: 14px;">χ</text>' +
	'<text x="918" y="193" style="font-family: sans-serif; font-size: 14px;">ħ</text>' +
	'<text x="1008" y="193" style="font-family: sans-serif; font-size: 14px;">h</text>' +
	'<text x="874" y="223" style="font-family: sans-serif; font-size: 14px;">ʁ</text>' +
	'<text x="964" y="223" style="font-family: sans-serif; font-size: 14px;">ʕ</text>' +
	'<text x="1054" y="223" style="font-family: sans-serif; font-size: 14px;">ɦ</text>' +
	'<text x="244" y="253" style="font-family: sans-serif; font-size: 14px;">ʋ</text>' +
	'<text x="516" y="253" style="font-family: sans-serif; font-size: 14px;">ɹ</text>' +
	'<text x="604" y="253" style="font-family: sans-serif; font-size: 14px;">ɻ</text>' +
	'<text x="696" y="253" style="font-family: sans-serif; font-size: 14px;">j</text>' +
	'<text x="782" y="253" style="font-family: sans-serif; font-size: 14px;">ɰ</text>' +
	'<text x="154" y="313" style="font-family: sans-serif; font-size: 14px;">ʙ</text>' +
	'<text x="426" y="313" style="font-family: sans-serif; font-size: 14px;">r</text>' +
	'<text x="604" y="313" style="font-family: sans-serif; font-size: 14px;">*</text>' +
	'<text x="874" y="313" style="font-family: sans-serif; font-size: 14px;">ʀ</text>' +
	'<text x="918" y="313" style="font-family: sans-serif; font-size: 14px;">ʜ</text>' +
	'<text x="964" y="313" style="font-family: sans-serif; font-size: 14px;">ʢ</text>' +
	'<text x="154" y="373" style="font-family: sans-serif; font-size: 14px;">ⱱ̟</text>' +
	'<text x="244" y="373" style="font-family: sans-serif; font-size: 14px;">ⱱ</text>' +
	'<text x="424" y="373" style="font-family: sans-serif; font-size: 14px;">ɾ</text>' +
	'<text x="604" y="373" style="font-family: sans-serif; font-size: 14px;">ɽ</text>' +
	'<text x="874" y="373" style="font-family: sans-serif; font-size: 14px;">ɢ̆ *</text>' +
	'<text x="964" y="373" style="font-family: sans-serif; font-size: 14px;">ʡ̯</text>' +
	'<text x="380" y="433" style="font-family: sans-serif; font-size: 14px;">ɬ</text>' +
	'<text x="424" y="433" style="font-family: sans-serif; font-size: 14px;">ɮ</text>' +
	'<text x="560" y="433" style="font-family: sans-serif; font-size: 14px;">ɭ˔̊</text>' +
	'<text x="648" y="433" style="font-family: sans-serif; font-size: 14px;">ʎ̥˔</text>' +
	'<text x="738" y="433" style="font-family: sans-serif; font-size: 14px;">ʟ̝̊</text>' +
	'<text x="426" y="493" style="font-family: sans-serif; font-size: 14px;">l</text>' +
	'<text x="606" y="493" style="font-family: sans-serif; font-size: 14px;">ɭ</text>' +
	'<text x="694" y="493" style="font-family: sans-serif; font-size: 14px;">ʎ</text>' +
	'<text x="784" y="493" style="font-family: sans-serif; font-size: 14px;">ʟ</text>' +
	'<text x="426" y="553" style="font-family: sans-serif; font-size: 14px;">ɺ</text>' +
	'<text x="604" y="553" style="font-family: sans-serif; font-size: 14px;">ɺ̢ *</text>' +
	'<text x="694" y="553" style="font-family: sans-serif; font-size: 14px;">ʎ̯</text>' +
	'</svg>';
}