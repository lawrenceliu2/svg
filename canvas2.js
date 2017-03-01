var pic = document.getElementById("vimage");
var b = document.getElementById("b");
var lastXcor;
var lastYcor;
var first = true;

var createDot = function() {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var xcor = event.clientX;
    var ycor = event.clientY;
    
    c.setAttribute("cx", xcor-10);
    c.setAttribute("cy", ycor-80);
    c.setAttribute("r", 20);
    c.setAttribute("fill", "blue");
    c.setAttribute("stroke", "black");
    pic.appendChild(c);

    if (first){
	first = false;
    }else{
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1", lastXcor);
	l.setAttribute("y1", lastYcor);
	l.setAttribute("x2", xcor-10);
	l.setAttribute("y2", ycor-80);
	l.setAttribute("stroke", "black");
	pic.appendChild(l);
    }
    lastXcor = xcor-10;
    lastYcor = ycor-80;
};

pic.addEventListener("click", createDot);

var clear = function() {
    var c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    c.setAttribute("x", 0);
    c.setAttribute("y", 0);
    c.setAttribute("width", 500);
    c.setAttribute("height", 500);
    c.setAttribute("fill", "white");
    first = true;
    pic.appendChild(c);
};

b.addEventListener("click", clear);
