// adding an event Listener to whole html document
// document.addEventListener('click', function(){
// 	window.alert('click called!');
// }
// );

// this is done so that html page is read/load first completely, then .js file is directed
// window.addEventListener('load', function(){
// 	var bodyHeader = document.querySelector('#body-header');
// 	console.log(bodyHeader);
// });


// console.log(document.getElementById('body-header'));

// document.querySelector is a js function which brings the value of #body-header in variable bodyHeader


 // to change the color of body-header on click
var x = document.querySelector('#Doe');

var colors = ['blue', 'green', 'yellow', 'white'];
var currentColor = 0;

x.addEventListener('click', function(){
	// this makes an object of click
	this.style.color = colors[currentColor % 4];
	currentColor ++;
   }
);