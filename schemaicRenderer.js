function drawAstable(){

let svg = document.getElementById("schematic");

svg.innerHTML = "";

let ns = "http://www.w3.org/2000/svg";

function line(x1,y1,x2,y2){

let l = document.createElementNS(ns,"line");

l.setAttribute("x1",x1);
l.setAttribute("y1",y1);
l.setAttribute("x2",x2);
l.setAttribute("y2",y2);
l.setAttribute("stroke","black");

svg.appendChild(l);

}

function text(x,y,t){

let tx = document.createElementNS(ns,"text");

tx.setAttribute("x",x);
tx.setAttribute("y",y);
tx.textContent = t;

svg.appendChild(tx);

}

line(200,100,200,300);
line(200,100,350,100);
line(350,100,350,300);
line(350,300,200,300);

text(235,210,"NE555");
text(260,230,"Timer");

}
