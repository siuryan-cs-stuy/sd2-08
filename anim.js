var svg = document.getElementById("pic");
var circleButton = document.getElementById("circleButton");
var dvdButton = document.getElementById("dvdButton");

var growing = true;
var radius = 10;
var id;

var x = 250;
var y = 250;
var dx = 1;
var dy = 1;

circleButton.addEventListener("click", function() {
  if (!id) {
    clear();

    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", 250);
    circle.setAttribute("cy", 250);
    circle.setAttribute("r", radius);
    circle.setAttribute("id", "animCircle");
    svg.appendChild(circle);

    id = setInterval(animateCircle, 10);
  }
});

dvdButton.addEventListener("click", function() {
  if (!id) {
    clear();

    var dvd = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    dvd.setAttribute("x", x);
    dvd.setAttribute("y", y);
    dvd.setAttribute("width", 50);
    dvd.setAttribute("height", 25);
    dvd.setAttribute("id", "animDvd");
    svg.appendChild(dvd);

    id = setInterval(animateDvd, 10);
  }
});

var animateCircle = function() {
  var animCircle = document.getElementById("animCircle");
  radius += (growing ? 1 : -1);
  animCircle.setAttribute("r", radius);
  if (radius >= 250 || radius <= 0) {
    growing = !growing;
  }
}

var animateDvd = function() {
  var animDvd = document.getElementById("animDvd");

  x += dx;
  y += dy;
  animDvd.setAttribute("x", x);
  animDvd.setAttribute("y", y);
  if (x >= 500 - 50 || x <= 0) {
    dx = -dx + (Math.random() - 0.5);
  }
  if (y >= 500 - 25 || y <= 0) {
    dy = -dy + (Math.random() - 0.5);

  }
}

var stop = document.getElementById("stop");

stop.addEventListener("click", function() {
  clearInterval(id);
  id = null;
});

var clear = function() {
  svg.innerHTML = "";
}
