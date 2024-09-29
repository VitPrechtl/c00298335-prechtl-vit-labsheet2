// below I declare an array of different colours
let colours = ["green", "blue", "red", "orange", "pink", "yellow"]

let box = document.getElementById("box");
let h2DoubleClick = document.getElementById("h2DoubleClick");
let discordSound = new Audio('assets/audio/ronnie_lightweight-baby.mp3');
let loop = 0;
setInterval(playDiscordSound, 2000);

box.addEventListener ("click", changeBoxColour)
box.addEventListener ("click", playDiscordSound)
box.addEventListener ("mouseover", boxMouseIn)
box.addEventListener ("mouseout", boxMouseOut)
h2DoubleClick.addEventListener ("dblclick", doubleClickResponse)
squaresWithinSquares();
circlesWithinCircle();
draw();
setup();

function playDiscordSound(){
    if (loop < 3){
        discordSound.play();
        discordSound.playbackRate=10.0;
        loop++;
        };
}
function boxMouseIn(){
    box.style.transform = "scale(1.1,1.1)";
    box.style.backgroundColor = "#75ff9f";
}
function boxMouseOut(){
    box.style.transform = "scale(1.0,1.0)";
    box.style.backgroundColor = "#33bd5c";
}
function doubleClickResponse(){
    h2DoubleClick.style.fontStyle = "italic";
    h2DoubleClick.style.backgroundColor = "pink";
}

//Function declaration that changes the box color
function changeBoxColour(){
    //Randomly generates a color, selected from the array
   let newColour = colours[Math.floor(Math.random() * colours.length)];
   //Inputs the generated color
   console.log("new box colour is:")
   console.log(newColour);
   //changes the color of the box
   box.style.backgroundColor = newColour;
}

// CANVAS
//get a handle to the canvas context
const canvas = document.getElementById("myCanvas");
const canvas2 = document.getElementById("myCanvas2");

//get 2D context for this canvas
const context = canvas.getContext("2d");

//draw something
context.fillRect(1000, 400, 50, 50);
//fillRect(position x, position y, width, height)

// SHAPES WITHIN CANVAS
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(25,25,250,550);
ctx.globalCompositeOperation = "xor";

ctx.beginPath();
ctx.arc(300,300,250,0, 2*Math.PI);
ctx.fillStyle = "pink";
ctx.fill();

ctx.beginPath();
ctx.arc(300,300,250,0, 1*Math.PI);
ctx.fillStyle = "orange";
ctx.fill();

ctx.fillStyle = "blue";
ctx.fillRect(0,0,200,200);

ctx.fillStyle = "yellow";
ctx.fillRect(400,0,200,200);

ctx.fillStyle = "Red";
ctx.fillRect(0,400,200,200);

ctx.fillStyle = "purple";
ctx.fillRect(400,400,200,200);

ctx.fillStyle = "green";
ctx.fillRect(200,200,200,200);
ctx.shadowBlur = 150;
ctx.shadowColor = "green";
ctx.fillRect(200,200,200,200);
ctx.clearRect(0,240,700,100);

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(100, 100);
ctx.lineTo(400, 200);
ctx.lineTo(500, 500);
ctx.lineTo(200, 400);
ctx.lineTo(100, 100);
ctx.lineWidth = 8;
ctx.stroke();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(100,200);
ctx.bezierCurveTo(100,100,500,100,500,200);
ctx.stroke();

// Gradient Square Stroke
const gradient = ctx.createLinearGradient(0,200,500,200);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "yellow");
gradient.addColorStop("1.0", "red");

ctx.strokeStyle = gradient;
ctx.lineWidth = 10;
ctx.strokeRect(100,100,400,400);

ctx.font = "40px Bold Roboto";
ctx.fillText("RESONANCE",180,300);

ctx.fillStyle = "purple";
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(150,-50,20,100);

ctx.fillStyle = "black";
ctx.fillRect(300,250,150,250);

ctx.fillStyle = "black";
ctx.fillRect(0,-500,1000,1500);
ctx.globalCompositeOperation = "xor";

ctx.beginPath();
ctx.rotate(-45 * Math.PI / 180);
ctx.arc(200,0,50,0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.shadowBlur = 0;
ctx.fill();

ctx.beginPath();
ctx.arc(500,200,180,0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.shadowBlur = 0;
ctx.fill();

ctx.beginPath();
ctx.arc(500,200,900,0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.shadowBlur = 0;
ctx.fill();

ctx.beginPath();
ctx.arc(0,600,320,0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.shadowBlur = 0;
ctx.fill();

ctx.beginPath();
ctx.arc(0,600,180,0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.shadowBlur = 0;
ctx.fill();


function squaresWithinSquares(){
    let ctx2 = document.getElementById('myCanvas2').getContext('2d');

    ctx2.fillRect(0,0,150,150);   // Draw a rectangle with default settings
    ctx2.save();                  // Save the default state

    ctx2.fillStyle = '#09F'       // Make changes to the settings
    ctx2.fillRect(15,15,120,120); // Draw a rectangle with new settings

    ctx2.save();                  // Save the current state
    ctx2.fillStyle = '#FFF'       // Make changes to the settings
    ctx2.globalAlpha = 0.5;
    ctx2.fillRect(30,30,90,90);   // Draw a rectangle with new settings

    ctx2.restore();               // Restore previous state
    ctx2.fillRect(45,45,60,60);   // Draw a rectangle with restored settings

    ctx2.restore();               // Restore original state
    ctx2.fillRect(60,60,30,30);   // Draw a rectangle with restored settings
    ctx2.save();
}
function circlesWithinCircle(){
    let ctx3 = document.getElementById("myCanvas2").getContext("2d");
    ctx3.translate(200,200);

    for (let i=1; i<11; i++)
    {
        ctx3.save();
        ctx3.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',200)';

        for (let j=0; j<i*6; j++)
        {
            ctx3.rotate(Math.PI*2/(i*6));
            ctx3.beginPath();
            ctx3.arc(0,i*18,6,0,Math.PI*2,true);
            ctx3.fill();
        }

        ctx3.restore();
    }
}
function draw() {
    let canvas = document.getElementById("myCanvas2");
    let ctx5 = canvas.getContext("2d");
  
    let sin = Math.sin(Math.PI/6);
    let cos = Math.cos(Math.PI/6);
    let c = 0;
    for (let i=0; i <= 12; i++) {
      c = Math.floor(255 / 12 * i);
      ctx5.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
      ctx5.fillRect(0, 0, 150, 10);
      ctx5.transform(cos, sin, -sin, cos, 0, 0);
    }
  
    ctx5.setTransform(-1, 0, 0, 1, 200, 200);
    ctx5.fillStyle = "rgba(255, 128, 255, 0.5)";
    ctx5.fillRect(0, 50, 100, 100);
}

function setup() {
    createCanvas(800, 800);
    angleMode(DEGREES);
    rectMode(CENTER);
    const ctx = drawingContext;
    const x = width / 2;
    const y = height / 2;
    const squareSideDotsCount = 30;
    
    const squareVertices = [];
    let startAngle = 45;
    for (let i = 0; i < 4; i += 1) {
      squareVertices.push({
        x: 400 * cos(startAngle),
        y: 400 * sin(startAngle),
      });
      startAngle += 360 / 4;
    }
       
    const square = [];
    for (let i = 0; i < 4; i += 1) {
      for (let j = 0; j < squareSideDotsCount; j += 1) {  
        const x = lerp(
          squareVertices[i].x,
          squareVertices[(i + 1) % squareVertices.length].x,
          j / squareSideDotsCount,
        );
        const y = lerp(
          squareVertices[i].y,
          squareVertices[(i + 1) % squareVertices.length].y,
          j / squareSideDotsCount,
        );
        square.push({ x, y });
      }
    }
    
    push();
    translate(x, y);
     for (let i = 0; i < square.length; i += 1) {
       push();
       noStroke();
       if (i % 2 === 0) {
          fill(0);
        } else {
          fill(255);
        }
       beginShape();
       vertex(square[i].x, square[i].y);
       vertex(0, 0);
       vertex(
          square[(i + 1) % square.length].x,
          square[(i + 1) % square.length].y,
        );
       endShape(CLOSE);
       pop();
     }
    pop();
  }