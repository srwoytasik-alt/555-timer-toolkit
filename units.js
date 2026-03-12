// function capToFarads(value, unit){

// const units = {
// "uF":1e-6,
// "nF":1e-9,
// "pF":1e-12
// };

// return value * units[unit];

// }

// function resToOhms(value, unit){

// const units = {
// "ohm":1,
// "k":1e3,
// "M":1e6
// };

// return value * units[unit];

// }
// function formatResistor(value){

// if(value >= 1e6){
// return (value/1e6).toFixed(2) + " MΩ";
// }

// if(value >= 1e3){
// return (value/1e3).toFixed(2) + " kΩ";
// }

// return value.toFixed(2) + " Ω";

// }

// function formatCapacitor(value){

// if(value >= 1e-3){
// return (value*1e3).toFixed(2) + " mF";
// }

// if(value >= 1e-6){
// return (value*1e6).toFixed(2) + " µF";
// }

// if(value >= 1e-9){
// return (value*1e9).toFixed(2) + " nF";
// }

// return (value*1e12).toFixed(2) + " pF";

// }


function capToFarads(value, unit){

const units = {

"uF":1e-6,
"nF":1e-9,
"pF":1e-12

};

return value * units[unit];

}

function formatResistor(value){

if(value >= 1e6){
return (value/1e6).toFixed(2) + " MΩ";
}

if(value >= 1e3){
return (value/1e3).toFixed(2) + " kΩ";
}

return value.toFixed(2) + " Ω";

}

function formatResistance(R){

if(R >= 1e6){
return (R/1e6).toFixed(2) + " MΩ";
}

if(R >= 1e3){
return (R/1e3).toFixed(2) + " kΩ";
}

return R.toFixed(2) + " Ω";

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


function formatCapacitance(C){

if(C >= 1e-3){
return (C*1e3).toFixed(2) + " mF";
}

if(C >= 1e-6){
return (C*1e6).toFixed(2) + " µF";
}

if(C >= 1e-9){
return (C*1e9).toFixed(2) + " nF";
}

return (C*1e12).toFixed(2) + " pF";

}
