var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var barX = 200;


function drawBar() {
    ctx.fillStyle = "gray";
    ctx.fillRect(barX, 250, 120, 10);
}

function leftArrowPassed() {
    ctx.clearRect(barX, 250, 120, 10);
    barX += - 15;
    if (barX < 0) {
        barX = false;
    }
    drawBar();
}
function rightArrowPassed() {
    ctx.clearRect(barX, 250, 120, 10);
    barX += 15;
    if (barX > canvas.width) {
        barX = false;
    }
    drawBar();
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 39:
            rightArrowPassed();
            break;
        case 37:
            leftArrowPassed();
            break;
    }
}

function docReady() {
    window.addEventListener('keydown', moveSelection);
}





