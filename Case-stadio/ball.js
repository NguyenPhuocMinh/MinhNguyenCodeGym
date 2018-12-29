var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var radius = 10;
var x = canvas.width / 2;
var y = canvas.height / 2;
var dx = 2;
var dy = -2;
var barX = 200;

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameBoard.draw();
    drawBar();
    docReady();
    checBallBar();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "orange";
    ctx.fill();
    ctx.stroke();

    if (x + dx > canvas.width || x + dx < 0) {
        dx = -dx;
    }
    if (y + dy > canvas.height) {
        ballReset();
        alert("Game Over");
    }
    if (y + dy < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;

}
setInterval(drawBall, 15);

function ballReset() {
    x = canvas.width / 4;
    y = canvas.height / 4;
}
function checBallBar() {
    if (y > canvas.height - 90 && y < canvas.height + 10 && x > barX && x < barX + 100) {
        dy *= -1;
    }
}