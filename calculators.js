// function calcMonostable(){

// let t = parseFloat(document.getElementById("time").value);

// let capVal = parseFloat(document.getElementById("cap").value);
// let capUnit = document.getElementById("capUnit").value;

// let C = capToFarads(capVal,capUnit);

// let R = t/(1.1*C);

// // document.getElementById("result").innerText =
// // "Required R = " + R.toFixed(0) + " ohms";
// document.getElementById("result").innerText =
// "Required R = " + formatResistor(R);

// }

function calcMonostable(){

let t = parseFloat(document.getElementById("time").value);

let capValue = parseFloat(document.getElementById("cap").value);
let capUnit = document.getElementById("capUnit").value;

let C = capToFarads(capValue,capUnit);

let R = t/(1.1*C);

document.getElementById("result").innerText =
"Required Resistor = " + formatResistor(R);

}


function calcAstable(){

let r1 = parseFloat(document.getElementById("r1").value);
let r2 = parseFloat(document.getElementById("r2").value);

let capVal = parseFloat(document.getElementById("c").value);
let capUnit = document.getElementById("capUnit").value;

let C = capToFarads(capVal,capUnit);

let freq = 1.44/((r1+2*r2)*C);

document.getElementById("freqResult").innerText =
"Frequency = " + freq.toFixed(2) + " Hz";

}
function formatFrequency(f){

if(f >= 1e6){
return (f/1e6).toFixed(2) + " MHz";
}

if(f >= 1e3){
return (f/1e3).toFixed(2) + " kHz";
}

return f.toFixed(2) + " Hz";

}

function calcMonostable(){

let T = parseFloat(document.getElementById("time").value);

let capValue = parseFloat(document.getElementById("cap").value);
let capUnit = document.getElementById("capUnit").value;

let C;

if(capUnit === "uF"){
C = capValue * 1e-6;
}

if(capUnit === "nF"){
C = capValue * 1e-9;
}

if(capUnit === "pF"){
C = capValue * 1e-12;
}

let R = T / (1.1 * C);

let result;

if(R >= 1000){
result = (R/1000).toFixed(2) + " kΩ";
}else{
result = R.toFixed(2) + " Ω";
}

// document.getElementById("result").innerText =
// "Required Resistor = " + result;

// document.getElementById("result").innerText =
// "Required Resistor = " + formatResistance(R);

let standard = nearestE12(R);

// document.getElementById("result").innerText =
// "Calculated: " + formatResistance(R) +
// " | Nearest E12: " + formatResistance(standard);

let e12 = nearestE12(R);
let e24 = nearestE24(R);

document.getElementById("result").innerText =
"Calculated: " + formatResistance(R) +
" | E12: " + formatResistance(e12) +
" | E24: " + formatResistance(e24);

}

function calcAstable(){

let r1 = parseFloat(document.getElementById("r1").value);
let r2 = parseFloat(document.getElementById("r2").value);

let capValue = parseFloat(document.getElementById("c").value);
let capUnit = document.getElementById("capUnit").value;

let C = capToFarads(capValue,capUnit);

let f = 1.44/((r1 + 2*r2)*C);

document.getElementById("freqResult").innerText =
// "Frequency = " + f.toFixed(2) + " Hz";
formatFrequency(f)

}


function calcPWM(){

let r1 = parseFloat(document.getElementById("pwmR1").value);
let r2 = parseFloat(document.getElementById("pwmR2").value);

let cap = parseFloat(document.getElementById("pwmC").value);
let unit = document.getElementById("pwmUnit").value;

let C = capToFarads(cap,unit);

let f = 1.44/((r1 + 2*r2)*C);

let duty = (r1 + r2)/(r1 + 2*r2)*100;

document.getElementById("pwmResult").innerText =
// "Frequency = " + f.toFixed(2) + " Hz | Duty Cycle = " + duty.toFixed(1) + "%";
"Frequency = " + formatFrequency(f)

}


function calcDelay(){

let R = parseFloat(document.getElementById("delayR").value);

let cap = parseFloat(document.getElementById("delayC").value);
let unit = document.getElementById("delayUnit").value;

let C = capToFarads(cap,unit);

let T = 1.1 * R * C;

document.getElementById("delayResult").innerText =
"Delay = " + T.toFixed(2) + " seconds";

}


function calcTone(){

let r1 = parseFloat(document.getElementById("toneR1").value);
let r2 = parseFloat(document.getElementById("toneR2").value);

let cap = parseFloat(document.getElementById("toneC").value);
let unit = document.getElementById("toneUnit").value;

let C = capToFarads(cap,unit);

let f = 1.44/((r1 + 2*r2)*C);

// document.getElementById("toneResult").innerText =
// "Tone Frequency = " + f.toFixed(2) + " Hz";

document.getElementById("toneResult").innerText =
"Tone Frequency = " + formatFrequency(f);


}


function solveAstable(){

let f = parseFloat(document.getElementById("targetFreq").value);

let capValue = parseFloat(document.getElementById("solverCap").value);
let capUnit = document.getElementById("solverUnit").value;

let C = capToFarads(capValue,capUnit);

let R = 1.44/(3*f*C);

let e12 = nearestE12(R);
let e24 = nearestE24(R);

document.getElementById("solverResult").innerText =
"R1 ≈ " + formatResistance(R) +
" | R2 ≈ " + formatResistance(R) +
" | E24 Suggestion: " + formatResistance(e24);

}
