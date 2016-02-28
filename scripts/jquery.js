HTMLElement.prototype.attr = function (attrName, attrValue) {
	this.setAttribute(attrName, attrValue);
	return this;
}
var $$ = function jQuery(tagName) {
	return document.createElement(tagName);
}
function $(selector) {
	var isTag = /<\w+>/.test(selector);
	if (isTag) {
		var matches = /\w+/.exec(selector);
		if (Array.isArray(matches)) {
			return document.createElement(matches[0]);
		}
	} else {
		tags = document.querySelectorAll(selector);
		return tags.length == 1 ? tags[0] : tags;
	}
}
HTMLElement.prototype.append = function (child) {
	this.appendChild(child);
	return this;
}

HTMLElement.prototype.on = function(events, handler){
	return this.addEventListener(events, handler, false);
}