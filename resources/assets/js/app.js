
var grid;

function init() {
	"use strict";

	var canvas = document.getElementById('ruler'),
		ruler;

	canvas.width = document.getElementsByClassName('Content')[0].clientWidth;
	canvas.height = document.getElementsByClassName('Content')[0].clientHeight;

	ruler = new Ruler("ruler");
	ruler.render('#aaa', 'pixels', 100);

	window.onresize = function() {
		canvas.width = document.getElementsByClassName('Content')[0].clientWidth;
		canvas.height = document.getElementsByClassName('Content')[0].clientHeight;	
		ruler.render('#aaa', 'pixels', 100);
	}
}

window.onload = init;