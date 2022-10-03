// draw a rectangle using canvas

let canvas=document.getElementById('myCanvas');
let context=canvas.getContext('2d');
context.fillStyle='red';
context.fillRect(0,10,150,75);
let rect2=canvas.getContext('2d');
rect2.fillStyle='blue';
rect2.fillRect(10,20,100,50);

// canvas coodinates and draw a line
let canvas2=document.getElementById('canvas2');
let context2=canvas2.getContext('2d');
context2.moveTo(0,0);
context2.lineTo(500,300);
context2.stroke();


// Draw a circle
//beginPath() - begins a path
// arc(x,y,r,startangle,endangle) - creates an arc/curve.

let canvas3=document.getElementById('canvas3');
let context3=canvas3.getContext('2d');
context3.beginPath();
context3.arc(200,100,90,0,2*Math.PI);
context3.stroke();


// Canvas linear gradients
let canvas4=document.getElementById('canvas4');
let context4=canvas4.getContext('2d');

// create linear gradient
let grd=context4.createLinearGradient(0,0,300,100);
grd.addColorStop('0','blue');
grd.addColorStop('1','red');

// fill with gradient
context4.fillStyle=grd;
context4.fillRect(0,0,400,200);



// Canvas radial gradients
let canvas5=document.getElementById('canvas5');
let context5=canvas5.getContext('2d');

// create radial gradient
let grad=context5.createRadialGradient(75, 50, 0, 90, 60, 60);
grad.addColorStop('0','yellow');
grad.addColorStop('1','red');

// fill with gradient
context5.fillStyle=grad;
context5.fillRect(0,0,200,100);



// Canvas text

let canvas6=document.getElementById('canvas6');
let context6=canvas6.getContext('2d');
let center=canvas6.getContext('2d');
context6.font='30px Arial';
context6.fillText("Learning Canvas",100,50);
context6.strokeText('With Javascript',100,100);
center.font='50px Comic Sans MS';
center.fillStyle='black';
center.textAlign='center';
center.fillText('Text Center',canvas6.width/2,canvas6.height/2);



// Canvas image
let canvas7=document.getElementById('canvas7');
let context7=canvas7.getContext('2d');
let img=document.getElementById('img');
context7.drawImage(img,50,50,400,400);


// Canvas Game
window.addEventListener('load',function(){
myGameArea();
let gamePiece= new Component(30,30,'red',10,120);
});

// Create game area 

function myGameArea(){
    let gameCanvas=document.getElementById('gameCanvas');
gameCanvas.style.margin='10px 0px 50px 0px';
gameCanvas.style.border='1px solid #d3d3d3'
let drawingObj=gameCanvas.getContext('2d');
drawingObj.fillStyle='#f1f1f1';
drawingObj.fillRect(0,0,600,300);
}

// create component on game area

function Component(width,height,color,x,y){
this.width=width;
this.height=height;
this.x=x;
this.y=y;
let ctx=gameCanvas.getContext('2d');
ctx.fillStyle=color;
ctx.fillRect(this.x,this.y,this.width,this.height);
}


