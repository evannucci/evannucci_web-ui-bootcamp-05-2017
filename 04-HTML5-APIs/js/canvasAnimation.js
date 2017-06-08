var ctx = document.getElementById('canvas').getContext('2d');
var x1 = 1; 
var y1 = 1;
var w = 100;
var h = 100;

window.requestAnimationFrame(draw);

function draw() {
  	for (let i = 0; i < 5; i++) {
     	ctx.clearRect(0,0,640,480);
      	ctx.fillRect(x1,y1,w,h);
    	x1++; 
  }
  window.requestAnimationFrame(draw);
}