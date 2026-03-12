// // const E12 = [
// // 1.0,1.2,1.5,1.8,2.2,2.7,
// // 3.3,3.9,4.7,5.6,6.8,8.2
// // ];

// // function nearestE12(value){

// // let decade = Math.pow(10, Math.floor(Math.log10(value)));

// // let normalized = value / decade;

// // let closest = E12.reduce((prev,curr)=>
// // Math.abs(curr-normalized) < Math.abs(prev-normalized) ? curr : prev
// // );

// // return closest * decade;

// // }
// const E12 = [
// 1.0,1.2,1.5,1.8,2.2,2.7,
// 3.3,3.9,4.7,5.6,6.8,8.2
// ];

// function nearestE12(value){

// let decade = Math.pow(10, Math.floor(Math.log10(value)));

// let normalized = value / decade;

// let closest = E12[0];

// for(let i=0;i<E12.length;i++){

// if(Math.abs(E12[i]-normalized) < Math.abs(closest-normalized)){
// closest = E12[i];
// }

// }

// return closest * decade;

// }

const E12 = [
1.0,1.2,1.5,1.8,2.2,2.7,
3.3,3.9,4.7,5.6,6.8,8.2
];

const E24 = [
1.0,1.1,1.2,1.3,1.5,1.6,
1.8,2.0,2.2,2.4,2.7,3.0,
3.3,3.6,3.9,4.3,4.7,5.1,
5.6,6.2,6.8,7.5,8.2,9.1
];

function nearestSeries(value, series){

let decade = Math.pow(10, Math.floor(Math.log10(value)));

let normalized = value / decade;

let closest = series[0];

for(let i=0;i<series.length;i++){

if(Math.abs(series[i]-normalized) < Math.abs(closest-normalized)){
closest = series[i];
}

}

return closest * decade;

}

function nearestE12(value){
return nearestSeries(value,E12);
}

function nearestE24(value){
return nearestSeries(value,E24);
}
