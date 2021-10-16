var mouseevent = "empty";

var lastx, lasty;
canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");

color = "yellow";
width = 7;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    mouseevent = "mouseDown";


}


canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {

    mouseevent = "mouseUp";


}


canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

    mouseevent = "mouseLeave";


}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;

    if (mouseevent == "mouseDown") {

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("lastx=" + lastx + "lasty=" + lasty);

        ctx.moveTo(lastx, lasty);

        console.log("currentx=" + currentx + "currenty=" + currenty);

        ctx.lineTo(currentx, currenty);

        ctx.stroke();


    }

    lastx = currentx;
    lasty = currenty;


}