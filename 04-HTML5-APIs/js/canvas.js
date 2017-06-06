
function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var col = '#';
        for (var i = 0; i < 6; i++ ) {
            col += letters[Math.floor(Math.random() * 16)];
        }
        return col;
    }


function loadCanvas(){

var c = document.getElementById("layer");
var ctx = c.getContext("2d");

ctx.fillStyle = getRandomColor();
console.log(ctx.fillStyle)
var x = ((Math.random() * 90) +4);
var y = ((Math.random() * 80) +3);
var z = ((Math.random() * 300) +2);
var w = ((Math.random() * 100) +1);
ctx.fillRect(x,y,z,w);

ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(z,w);
ctx.lineTo(x,w);
ctx.strokeStyle=getRandomColor();
ctx.stroke();

}






