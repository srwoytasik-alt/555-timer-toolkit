function drawWaveform() {

const canvas = document.getElementById("waveform");
const ctx = canvas.getContext("2d");

ctx.clearRect(0,0,canvas.width,canvas.height);

let R1 = parseFloat(document.getElementById("r1").value);
let R2 = parseFloat(document.getElementById("r2").value);
let C = parseFloat(document.getElementById("c").value);

let chargeTime = 0.693 * (R1 + R2) * C;
let dischargeTime = 0.693 * R2 * C;

let period = chargeTime + dischargeTime;

let width = canvas.width;
let height = canvas.height;

ctx.beginPath();

let x = 0;

let step = width / 100;

for(let i=0;i<50;i++){

let y = height * (0.66 - 0.33*Math.exp(-i/10));

ctx.lineTo(x,y);

x += step;

}

for(let i=0;i<50;i++){

let y = height * (0.33 + 0.33*Math.exp(-i/10));

ctx.lineTo(x,y);

x += step;

}

ctx.stroke();

ctx.font="14px Arial";

ctx.fillText("Capacitor Voltage",10,20);

}
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(0,height*0.33);
ctx.lineTo(width,height*0.33);
ctx.stroke();

ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.moveTo(0,height*0.66);
ctx.lineTo(width,height*0.66);
ctx.stroke();
