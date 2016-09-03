 ruler.constructRulers({
	container: document.querySelector('#ruler'),// reference to DOM element to apply rulers on
	rulerHeight: 15, // thickness of ruler
	fontFamily: 'arial',// font for points
	fontSize: '7px', 
	strokeStyle: 'black',
	lineWidth: 1,
	enableMouseTracking: true,
	enableToolTip: true
});